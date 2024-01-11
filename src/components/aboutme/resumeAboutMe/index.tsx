/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { info } from '../../../../info'
import style from "./Aboutme.module.sass";
import Link from "next/link";

export default function About() {
  const [animation, setAnimation] = useState(false)
  const [animationClass, setAnimationClass] = useState('');
  const [infoIndex, setIndexValue] = useState(0)
  const infoValues = Object.values(info)

  const changeIndexInfo = () => {
    var count = (infoIndex === 0) ? 1 : -1;
    const indexInfo = Math.max(0, infoIndex + count)
    setIndexValue(indexInfo)
    // Adiciona a classe para iniciar a animação
    setAnimationClass(style.animation);
    setTimeout(() => {
      setAnimationClass('')
    }, 3000)
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
    const intervalId = setInterval(changeIndexInfo, 10000);
    return () => {
      window.removeEventListener('scroll', scrollAnaimation);
      clearInterval(intervalId);
    };
  }, [infoIndex])

  return (
    <div className={style.mainContainer}>
      <div className={style.containerTitle} style={{ display: animation && 'flex' || 'none' }}>
        <p className={setAnimationAbout(animation)} style={{ opacity: animation && 1 || 0 }}>Sobre mim</p>
      </div>
      <div className={style.containerImage} style={{ display: animation && 'flex' || 'none' }}>
        <div className={style.containerText}>
          <h1 className={setAnimationAbout(animation)} style={{ opacity: animation && 1 || 0 }}>Douglas Jansey</h1>
          <span className={setAnimationAbout(animation)} style={{ opacity: animation && 1 || 0 }}>
            <p className={animationClass}>
              {infoValues[infoIndex]}
            </p>
          </span>
          <div className={setAnimationAbout(animation)} style={{ opacity: animation && 1 || 0 }}>
            <button className={style.buttonAbout}>
              <Link href={'/sobremim'}>
                  <p>Conheça um pouco mais...</p>
                  <BsArrowRight size={20} />
              </Link>
            </button>
          </div>
          <img className={animation ? style.imageAnimate : ''} style={{ opacity: animation && 1 || 0 }} src="/images/developer.png" alt="" />
        </div>
      </div>
    </div>
  );
}
