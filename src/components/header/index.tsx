'use client'
import Link from "next/link";
import style from "./Header.module.sass";
import { usePathname } from 'next/navigation';

// Rotas explicitas: antes o href era derivado do rotulo com replace de
// "%C3%B3", o que quebrava o estado ativo do item "portfólio".
const MENU = [
  { label: 'início', href: '/' },
  { label: 'sobre mim', href: '/sobremim' },
  { label: 'portfólio', href: '/portfólio' },
  { label: 'skills', href: '/skills' },
  { label: 'contato', href: '/contato' },
]

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    let current = pathname
    try {
      current = decodeURIComponent(pathname)
    } catch {
      // pathname malformado: usa como veio
    }
    return current === href
  }

  return (
    <div className={style.containerMenu}>
      <nav className={style.containerNav}>
        <ul className={style.ul}>
          {MENU.map((item) => (
            <li key={item.href} className={isActive(item.href) ? style.activePath : style.li}>
              <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
