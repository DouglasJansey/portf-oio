'use client'
import {useEffect} from 'react'
import Link from "next/link";
import style from "./Header.module.sass";

export default function Header() {
  const menu = ["Sobre mim", "Projetos", "Habilidades", "Contato", "Formação"];

  useEffect(() => {
    console.log(scrollY)
  },[])

  
  return (
    <div className={style.containerMenu}>
      <nav className={style.containerNav}>
        <ul className={style.ul}>
          {menu.map((item, index) => (
            <li key={index + 2} className={style.li} >
              <Link href={'/home'} >{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
