/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { useEffect, useRef, useState } from 'react';
import { languages, experience } from '../../../../imports'
import { profile } from '../../../../services/info'
import Languages from './languages';
import style from "./Aboutme.module.sass";


export default function AboutMe() {
  const [activeLanguage, setActiveLanguage] = useState(false)
  const [activeExperience, setActiveExperience] = useState(false)
  const [seeMore, setSeeMore] = useState(false)
  const profileDesc = profile.desc
  const refLang = useRef<HTMLDivElement>(null);

  const scrollAnaimation = (): void => {
    const scrollY = window.scrollY;
    handleDivHeight()
    setActiveLanguage(scrollY > 0);
  }

const handleDivHeight = () => {
  const rect = refLang.current?.getBoundingClientRect();

  if (rect) {
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
        </div>
        <div>
          <p className={seeMore ? '' : style.cardText } style={{maxHeight: seeMore ? 'none': ''}}>
            {profileDesc}
          </p>
          <input type='checkbox' onChange={() => setSeeMore(!seeMore)} className={style.btnCheck}/>
        </div>
      </article>
    </div>
    <div ref={refLang} >
        {activeLanguage && languages}
      </div>
      {activeExperience && experience}
  </section>
);
}
