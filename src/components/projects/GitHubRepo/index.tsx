'use client'
import { CSSProperties, Key, useEffect, useRef, useState } from 'react';
import style from './githubRepo.module.sass';
import { GetDataRepository } from '../../../../services/getData'

interface GitProjectProps {
        name: string;
        url: string;
        language: {};
        desc: string;
        created_at: string;
        stars: number;

}

export default function GitHubProjects({name, url, language, desc, created_at, stars}: GitProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [spanWidth, setSpanWidth] = useState(0)
    const valueLanguage: any[] = Object.values(language)
    const nameLanguage: any[] = Object.keys(language)

    console.log(nameLanguage, name)

    const calculateWidth = () => {
        const arraySort = valueLanguage.sort((a, b) => b - a)
        const totalValue = arraySort.reduce((acc, curr) => acc + curr, 0);
        const totalPercent = valueLanguage.map(lang => lang / totalValue);
        const widths = totalPercent.map(percent => percent * spanWidth);
        return widths
    }
    const setImageLanguage = (name: string) =>{
        const imgLanguage = {
            HTML: 'html5',
            CSS: 'css3',
            'C#': 'csharp',
        }
        return imgLanguage[name as keyof typeof imgLanguage]
    }
    const languagesSpanWidth = () => {
        const width = calculateWidth()
        const colors = {
            javascript: '#F7DF1E',
            html: '#E34F26',
            css: '#1572B6',
            typescript: '#3178C6',
            ejs: '#B4CA65',
            java: '#CC0000',
            shell: '#FFD500',
            sass: '#CC6699',
            "c#": '#512BD4',
        }

        return nameLanguage.map((item, index) => (
            {
                width: `${width[index]}px`,
                height: '10px',
                background: colors[item.toLowerCase() as keyof typeof colors],
            }
        ))
    }
    useEffect(() => {
        const handleResize = () => {
            const span = ref.current?.clientWidth || 0;
            setSpanWidth(span)
        };
        handleResize()
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <article>
            <div className={style.card}>
                <aside className={style.containerTitle}>
                    <h1 className={style.Title}>{name}</h1>
                    <figure className={style.containerImg}>
                        <img src='https://avatars.githubusercontent.com/u/87612240?v=4' alt='' />
                    </figure>
                </aside>
                <aside>
                    <p className={style.text}>descrição do repositório</p>
                    <div className={style.flex}>
                        {nameLanguage.map((lang, index) => (
                            <figure className={style.containerLanguageImg} key={index + 4}>
                                <img src={`https://cdn.simpleicons.org/${lang === 'HTML' || lang === 'CSS' || lang === 'C#' ? setImageLanguage(lang) : lang}`} />
                            </figure>
                        ))}
                    </div>
                    <div className={style.containerLanguages} ref={ref}>
                        {languagesSpanWidth().map((style: any, index: number) => (
                            <span key={index} style={style}></span>
                        ))}
                    </div>
                </aside>
            </div>
        </article>
    )
}