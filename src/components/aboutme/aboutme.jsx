"use client";
import style from "./Aboutme.module.sass";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function AboutMe() {
  return (
    <div className={style.mainContainer}>
      <div className={style.containerTitle}>
        <p>Sobre mim</p>
      </div>
      <div className={style.containerImage}>
        <div className={style.containerText}>
          <h1>Douglas Jansey</h1>
          <span>
            <p>
              Sou formado em análise e desenvolvimento de sistemas, também sou
              apaixonado por tecnologia desde os meus 14 anos, porém não puder
              dar continuidade na area. Meu primeiro contato com a programação
              foi programando em C# e ActionScript 3.0, atualmente tenho
              conhecimento...
            </p>
          </span>
          <button className={style.buttonAbout}>
            <span>
              <p>Conheça um pouco mais...</p>
              <BsArrowRight size={20} />
            </span>
          </button>
          <img src="/images/developer.png" alt="" />
        </div>
      </div>
    </div>
  );
}
