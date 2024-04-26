'use client'
import style from './footer.module.sass';
import { instaFooter, facebookF, linkedIn, github, email, phone } from '../../../imports/reactIcons'
import Link from 'next/link';
export default function Footer() {
    const social = ['Instagram', 'Facebook', 'Linkedin', 'Github']
    const navegation = ['Sobre mim', 'Projetos', 'Habilidades', 'Contato']
    const contact = ['(21) 98084-6797', 'douglas.jansey@gmail.com']
    const divNames = [navegation, social, contact]
    const mapNamesArray = (arr: string[][]) => {
        const newArray = arr
        const menuNames = {
            0: 'Mapa do Site',
            1: 'Redes Sociais',
            2: 'Contato'
        }
        const linkUrl = {
            instagram: 'https://www.instagram.com/douglasjansey',
            facebook: 'https://www.facebook.com/douglasjansey',
            linkedin: 'https://www.linkedin.com/in/douglasjansey',
            github: 'https://www.github.com/douglasjansey',
        }
        const linkKeys = Object.keys(linkUrl)

        const filterLinks = (links: string) => {
            return linkKeys.includes(links) ? linkUrl[links as keyof typeof linkUrl] : links
        }
        return (
            <div className={style.containerLinks}>
                {newArray.map((name, index) => (
                    <div key={index + 2} className={style.containerInfo}>
                        <p>
                            {menuNames[index as keyof typeof menuNames]}
                        </p>
                        {menuNames[index as keyof typeof menuNames] !== 'Contato' && name.map((name, i) => (
                            <li key={i * 3}>
                                <Link href={filterLinks(name.replace(' ', '').toLowerCase())} target={linkKeys.includes(name.toLocaleLowerCase()) ? '_blank' : ''}>
                                    {name}
                                </Link>
                            </li>
                        )) || contact.map((name, index) => (
                            <li key={index + 5}>
                                {name === 'douglas.jansey@gmail.com' && email || phone}
                                {name}
                            </li>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className={style.mainContainer}>
            <aside>
                <p> Entre em contato comigo pelas redes sociais </p>
                <span>
                    {facebookF}
                    {linkedIn}
                    {instaFooter}
                    {github(20)}
                </span>
            </aside>
            <aside>
                {mapNamesArray(divNames)}
            </aside>
            <aside className={style.footer}>
                <p>&#9400; 2024 - Desenvolvido por Douglas Jansey </p>
            </aside>
        </div>
    )
}