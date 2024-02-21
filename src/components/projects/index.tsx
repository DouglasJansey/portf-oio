/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import style from "./projects.module.sass";
import { CardProjects, GitProjects } from '../../../imports/componentsimport'
import { projects } from '../../../info'
import { useEffect, useState } from "react";
import { GetDataRepository } from "../../../services/getData";

interface ButtonProps extends React.MouseEvent<HTMLElement> {
  target: HTMLButtonElement & {
    name: string
  }
}
interface RepoProps {
  params: string;
}

export default async function Projects() {
  const repo = await GetDataRepository('https://api.github.com/users/DouglasJansey/repos');
  const repositorys = Object.values(repo)
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
          <ul className={style.containerGitProject}>
            {(typeof repo !== 'string') ? repositorys.map((repos, index) => (
              <li key={index + 2}>{<GitProjects 
                name={repos.repo.name} 
                url={repos.repo.url} 
                language={repos.languages} 
                desc={repos.repo.description} 
                created_at={repos.repo.created_at}
                stars={repos.repo.stargazers_count}
                />}</li>
            )): 'loading'}
          </ul>
        </aside>
      </article>
    </>
  );

}
