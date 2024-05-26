/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { useEffect, useRef, useState } from 'react';
import { languages, experience } from '../../../../imports'
import Languages from './languages';
import style from "./Aboutme.module.sass";


export default function AboutMe() {
  const [activeLanguage, setActiveLanguage] = useState(false)
  const [activeExperience, setActiveExperience] = useState(false)
  const refLang = useRef<HTMLDivElement>(null);

  const scrollAnaimation = (): void => {
    const scrollY = window.scrollY;
    handleDivHeight()
    setActiveLanguage(scrollY > 0);
  }
  const handleDivHeight = () => {
    const rect = refLang.current?.getBoundingClientRect();
    
    if(rect){
      if (rect.width && rect.height) {
        // A div está visível na tela, atualiza a altura
        const divHeight = refLang.current!
        scrollY > divHeight?.clientHeight && divHeight?.clientHeight > 0 ? setActiveExperience(true) : setActiveExperience(false)       
        
      }
      
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollAnaimation);
    return () => {
      window.removeEventListener('scroll', scrollAnaimation);
    };
  }, []);

  return (
    <section className={style.mainContainer}>
      <div className={style.subContainer}>
        <figure className={style.containerImg}>
          <div>
            <img src="/images/color.jpg" alt="" />
          </div>
        </figure>
        <article className={style.containerText}>
          <div>
            <h1 className={style.textTitle}>Sobre mim</h1>
            <p className={style.subTitle}>Douglas Jansey</p>
            <p className={style.text}>Desenvolvedor Full Stack</p>
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas,
              tenho 33 anos e sou um apaixonado por tecnologia e programação desde meus 14 anos,
              atuei 8 anos como designer gráfico tendo uma ampla noção no uso de ferramentas como Photoshop e CorelDraw.
              Atualmente estou fazendo uma transição de carreira para o desenvolvimento web front-end e back-end,
              conheci a programação em 2007,
              onde programei utilizando C# e action script, onde aprendi OOP e seus fundamentos.
            </p>
          </div>
        </article>
      </div>
      <div ref={refLang}>
        {activeLanguage && languages}
      </div>
        {activeExperience && experience}
    </section>
  );
}
