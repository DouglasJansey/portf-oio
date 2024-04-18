'use client'
import style from './footer.module.sass';
import { instaFooter, facebookF, linkedIn, github } from '../../../imports/reactIcons'
import Link from 'next/link';
export default function Footer() {
    const social = ['Instagram', 'Facebook', 'Linkedin', 'github']
    const navegation = ['Sobre mim', 'Projetos', 'Habilidades', 'Contato']
    const contact = ['(21) 98084-6797', 'douglas.jansey@gmail.com']
    const divNames = [navegation, social, contact]
    const mapNamesArray = (arr: string[][]) => {
        const newArray = arr
        const menuNames = {
            0: 'Navegação',
            1: 'Redes Sociais',
            2: 'Contato'
        }
        const linkUrl = {
            instagram: 'https://www.instagram.com/douglasjansey',
            facebook: 'https://www.facebook.com/douglasjansey',
            linkedin: 'https://www.linkedin.com/in/douglasjansey',
            github: 'https://www.github.com/douglasjansey',
        }
        const filterLinks = (links: string) => {
            const linkKeys = Object.keys(linkUrl)
            return linkKeys.includes(links) ? linkUrl[links as keyof typeof linkUrl] : links
        }
        return (
            <div>
                {newArray.map((name, index) => (
                    <div key={index + 2} className={style.containerInfo}>
                        <p>
                            {menuNames[index as keyof typeof menuNames]}
                        </p>
                        {menuNames[index as keyof typeof menuNames] !== 'Contato' && name.map((name, i) => (
                            <li key={i * 3}>
                                <Link href={filterLinks(name.replace(' ', '').toLowerCase())}>
                                    {name}
                                </Link>
                            </li>
                        )) || contact.map((name, index) => (
                            <li key={index + 5}>
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
        </div>
    )
}