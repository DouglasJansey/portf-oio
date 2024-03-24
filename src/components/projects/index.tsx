/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import style from "./projects.module.sass";
import { CardProjects, GitProjects, loading } from '../../../imports/componentsimport'
import { projects } from '../../../services/info'
import { useEffect, useState } from "react";
import { GetDataRepository } from "../../../services/getData";

interface ProjectProps {
  repo: any,
  languages: any
  contributors: []
}

export default function Projects() {
  const [repoData, setRepoData] = useState<ProjectProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProjectProps[] = await GetDataRepository('https://api.github.com/users/DouglasJansey/repos');
        setRepoData(data); // Define o estado com os dados obtidos da requisição
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        // Lidar com erros
      }
    };

    fetchData(); // Chama a função para buscar os dados quando o componente monta
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
              <div key={index + 2}>
                <li>
                  {
                    CardProjects({ value })
                  }
                </li>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <article>
        <aside className={style.containerGitProject}>
          <span>
            <p className={style.Title}>Repositórios GitHub</p>
          </span>
          <ul className={style.containerUl}>
            {repoData.length > 0 ? repoData.map((repos, index) => (
              <li key={index + 2}>{<GitProjects
                name={repos.repo.full_name}
                url={repos.repo.html_url}
                language={repos.languages}
                desc={repos.repo.description}
                created_at={repos.repo.created_at}
                gitIcons={[{ value: repos.repo.forks_count, name: 'fork' },
                { value: repos.repo.open_issues, name: 'issue' },
                { value: repos.repo.stargazers_count, name: 'star' },
                { value: repos.contributors.length, name: 'contributors' }]}
              />}</li>
            )) : loading}
          </ul>
        </aside>
      </article>
    </>
  );

}
