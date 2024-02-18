/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import style from "./projects.module.sass";
import { CardProjects, GitProjects } from '../../../imports/componentsimport'
import { projects } from '../../../info'

interface ButtonProps extends React.MouseEvent<HTMLElement> {
  target: HTMLButtonElement & {
    name: string
  }
}
interface ProjectsProps {
  params: string;
}

export default function Projects() {

  return (
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
  );

}
