/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { RefObject, useEffect, useState } from "react";
import style from "./languages.module.sass";

export default function Languages() {

  return (
    <div className={style.mainContainer}>
      <div className={style.subContainer}>
        <article className={style.containerText}>
          <div>
            <h1 className={style.textTitle}>Idiomas</h1>
            <aside>
              <p className={style.subTitle}>Inglês - Intermediário</p>
              <p>
                Tenho conhecimento intermediário em inglês mesmo sem nunca ter feito um curso,
                tenho desenvolvido meu inglês por conta proópria, venho estudando para melhorar ainda mais meu listening e minha escrita,
                tenho facilidade de aprendizado e acredito que a prática de conversação pode me levar a fluência em breve.
              </p>
            </aside>
            <aside>
              <p className={style.subTitle}> Francês - Básico</p>
              <p>
                Tenho conhecimento básico em francês, consigo ler textos e entender frases simples,
                tenho desenvolvido meu por minha conta,
                é um idioma que comecei a estudar em segundo plano por curiosidade e acabei gostando e me interessando,
                pretendo me aprofundar após chegar no nível C1 em inglês.
              </p>
            </aside>
          </div>
          <figure className={style.containerImg}>
            <img src="/images/idiomas.png" alt="" />
          </figure>
        </article>
      </div>
    </div>
  );
}
