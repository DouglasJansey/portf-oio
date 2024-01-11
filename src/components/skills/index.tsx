/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { useEffect, useState } from "react";
import {
  mysql, nextjs, nodejs, prisma,
  sass, typescript, arrowRight
} from '../../../imports/reactIcons';

import style from "./Skills.module.sass";

export default function Skills() {
  const [animation, setAnimation] = useState(false)
  const frontEnd = ['NextJS', 'TypeScript', 'Sass']
  const backEnd = ['NodeJS', 'Prisma', 'MySQL']

  const handleSkillsImages = (item: string) => {
    const itemsName = item.toLowerCase()
    const images = {
      nextjs: nextjs,
      typescript: typescript,
      sass: sass,
      nodejs: nodejs,
      prisma: prisma,
      mysql: mysql,
    }
    return (
      <>
        {images[itemsName as keyof typeof images]}
      </>
    )
  }
  const scrollAnaimation = () => {
    if (scrollY >= 157) {
      setAnimation(true)
    }
  }
  const setAnimationAbout = (bool: boolean) => {
    return bool ? style.animation : '';
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollAnaimation);
    return () => {
      window.removeEventListener('scroll', scrollAnaimation);
    };
  }, [])

  return (
     <section className={style.mainContainer}>
      <article className={style.containerTitle}>
        <h1>Experiências</h1>
      </article>
      <div className={style.subContainer}>
        <figure className={style.containerImg}>
          <img src="/images/menu.png" alt="" />
        </figure>
        <article className={style.containerText}>
          <div>
            <aside className={style.containerExp}>
            
            </aside>
          </div>
        </article>
      </div>
    </section>
   //   <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/orange" />   
  );
}
