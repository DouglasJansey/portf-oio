'use client'
import style from "./projects.module.sass";
import { CardProjects, GitProjects, loading } from '../../../imports/componentsimport'
import { projects } from '../../../services/info'
import { useEffect, useState } from "react";
import type { RepositoryData } from '../../../services/getData'

const REPOS_URL = 'https://api.github.com/users/DouglasJansey/repos'

export default function Projects() {
  const [repoData, setRepoData] = useState<RepositoryData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/get-repo-data?urlData=${encodeURIComponent(REPOS_URL)}`)
        if (!res.ok) throw new Error(`status ${res.status}`)
        const { data } = await res.json();
        if (active) setRepoData(data ?? [])
      } catch {
        if (active) setError(true)
      }
    };

    fetchData();
    return () => { active = false }
  }, []);

  return (
    <>
      <section className={style.mainContainer}>
        <span>
          <p className={style.Title}>Projetos</p>
        </span>
        <div className={style.containerIcons}>
          <ul>
            {projects.map((value, index) => (
              <li key={index + 2}>
                <CardProjects value={value} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <article>
        <aside className={style.containerGitProject}>
          <span>
            <p className={style.Title}>Repositórios GitHub</p>
          </span>
          {error && <p className={style.Title}>Não foi possível carregar os repositórios.</p>}
          <ul className={style.containerUl}>
            {repoData.length > 0 ? repoData.map((repos) => (
              <li key={repos.repo.id}>
                <GitProjects
                  name={repos.repo.full_name}
                  url={repos.repo.html_url}
                  language={repos.languages}
                  desc={repos.repo.description}
                  created_at={repos.repo.created_at}
                  gitIcons={[
                    { value: repos.repo.forks_count, name: 'fork' },
                    { value: repos.repo.open_issues, name: 'issue' },
                    { value: repos.repo.stargazers_count, name: 'star' },
                    { value: repos.contributors.length, name: 'contributors' },
                  ]}
                />
              </li>
            )) : !error && (
              <div className={style.containerLoading}>
                {loading}
              </div>
            )}
          </ul>
        </aside>
      </article>
    </>
  );
}
