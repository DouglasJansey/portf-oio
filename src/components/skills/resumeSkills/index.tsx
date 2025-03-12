/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { useEffect, useRef, useState } from "react";
import { skills } from '../../../../services/info'
import { Card } from '../../../../imports/componentsimport'
import { usePathname } from "next/navigation";
import { changeState } from '../../../../state'
import { motion } from 'framer-motion'
import style from "./skills.module.sass";


export default function Skills() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    // Troca de lugar somente ao clicar no texto menor
    setIsSwapped(!isSwapped);
  };

  //redimensiona a lista caso haja um espaço vazio
  const handleSkill = (type: string) => {
    let sum = 1
    return (
      <ul>
        {skills.map((value, index) => (
          value.type === type && (
            <li className={style.animation} style={{animationDuration: `0.${sum++}s`}} key={index + 2}>
              {
                Card({ value, index })
              }
            </li>
          ) 
        ))
        }
      </ul>
    )
  }
  return (
    <section className={style.mainContainer}>
      <article className={style.subContainer}>
        <div className={style.Title}>
          <span> 
            <motion.div
              className={`${style.text} ${style.large}`}
              initial={false}
              animate={{
                top: isSwapped ? "75%" : "0%", // Troca de posição
                left: isSwapped ? "217%" : "8%", // Troca de posição
                fontSize: isSwapped ? "1rem" : "3rem", // Tamanho do texto
              }}
              transition={{ duration: 0.2 }}
              onClick={() => isSwapped && handleClick()}
            >
              <h2>
                front-end
              </h2>
            </motion.div>
          </span>
          <div>
            <motion.div
              className={`${style.text}`}
              initial={false}
              animate={{
                top: isSwapped ? "0%" : "75%", // Troca de posição
                left: isSwapped ? "5%" : "88%", // Troca de posição
                fontSize: isSwapped ? "3rem" : "1rem", // Tamanho do texto
              }}
              transition={{ duration: 0.2 }}
              onClick={() => !isSwapped && handleClick()}
            >
              <h2>
                Back-end
              </h2>
            </motion.div>
          </div>
        </div>
        <div className={style.containerText}>
          <div>
            <p>
              As tecnologias e ferramentas abaixo fazem parte da minha jornada como desenvolvedor fullstack.
              Cada uma delas contribui para criar soluções eficientes, escaláveis e intuitivas,
              garantindo uma experiência completa para o usuário,desde a interface até a lógica de negócio no servidor.
            </p>
          </div>
        </div>
        <div className={style.containerIcons}>
          <h2>Linguagens & Frameworks</h2>
          <div>
            {handleSkill(`${!isSwapped ? 'frontend' : 'backend'}`)}
          </div>
          <h2>Bibliotecas & Ferramentas</h2>
          <div>
            {handleSkill(`biblioteca&${!isSwapped ? 'frontend' : 'backend'}`)}
          </div>
          <h2>Testes</h2>
          <div>
            {handleSkill(`teste&${!isSwapped ? 'frontend' : 'backend'}`)}
          </div>
        </div>
      </article>
    </section>
  );

}
