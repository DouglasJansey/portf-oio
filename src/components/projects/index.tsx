/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import style from "./projects.module.sass";
import { CardProjects } from '../../../imports/componentsimport';
import { projects } from '../../../services/info';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const totalProjects = projects.length;

  const handleNext = () => setCurrent((prev) => (prev + 1) % totalProjects);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + totalProjects) % totalProjects);

  const handleLanguages = (name: string) => {
    const languagesList = {
      "frontend": projects[current].languages.frontend,
      "backend": projects[current].languages.backend,
    }
    const sizeList = languagesList[name as keyof typeof languagesList].length - 1
    return (
      <>
      <h5>{languagesList[name as keyof typeof languagesList].length > 0 ? name.toUpperCase()  : ''}</h5>
        {languagesList[name as keyof typeof languagesList].map((name, index) => (
          <h4 key={index * 2}>
            {index !== sizeList ? `${name},` : name}
          </h4>
        ))}
      </>
    )
  }

  return (
    <>
      <article className={style.mainContainer}>
        <div className={style.containerBackground}>
          <div className={style.containerDesc}>
            <div>
              <h1>
                PORTFÓLIO
              </h1>
              <div>
                <h3>
                  {projects[current].type}
                </h3>
                <h2>
                  {projects[current].name.replace(/( )+/g, "")}
                </h2>
                <div>
                  <p>
                    tecnologias:
                  </p>
                  <div className={style.containerLanguages}>
                    {handleLanguages('frontend')}
                  </div>
                  <div className={style.containerLanguages}>
                    {handleLanguages('backend')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.containerBackgroundImage} >
            <iframe src={projects[current].url} />
          </div>
        </div>
        <div className={style.carouselContainer}>
          <div className={style.carouselTrack}>
            <div className={style.carousel}>
              {projects.map((value, index) => {
                const isCenter = index === current;
                return (
                  <motion.div
                    key={index}
                    className={`${isCenter ? style.itemCenter : style.itemSide}`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: isCenter ? 1.2 : .9, zIndex: isCenter ? 9 : 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => !isCenter && setCurrent(index)}
                  >
                    {CardProjects({ value })}
                  </motion.div>
                )
              })}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <button onClick={handlePrev} className={style.arrowLeft}>&lt;</button>
            <button onClick={handleNext} className={style.arrowRight}>&gt;</button>
          </div>
        </div>
      </article>

      {/* <article>
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
            )) : <div className={style.containerLoading}>
              {loading}
            </div>
            }
          </ul>
        </aside>
      </article> */}
    </>
  );

}
