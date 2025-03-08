'use client'
import { useEffect, useState } from 'react'
import Link from "next/link";
import style from "./Header.module.sass";
import { usePathname } from 'next/navigation';

export default function Header() {
  const menu = ["sobre mim", "portfólio", "skills", "Contato"];
  const pathname = usePathname()

  const handleLinkMenu = (menu: string) => {
    const menuValue = menu.replace(' ', '').replace("%C3%B3", "o").toLowerCase()
    
    return `/${menuValue}`;
  }
  const handleLinkClass = (value: string) => {
    const filterPath = pathname.replace('/', '').replace("%C3%B3", "ó").toLowerCase()
    const menuName = value.replace(' ', '')

    return filterPath === menuName ? style.activePath : style.li
  }

  return (
    <div className={style.containerMenu}>
      <nav className={style.containerNav}>
        <ul className={style.ul}>
          {menu.map((item, index) => (
            <li key={index + 2} className={handleLinkClass(item)} >
              <Link href={handleLinkMenu(item)}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
