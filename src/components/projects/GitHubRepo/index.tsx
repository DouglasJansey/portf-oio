/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef, useState } from 'react';
import style from './githubRepo.module.sass';
import { arrowRight } from '../../../../imports/reactIcons'
import { ButtonLink } from '@/components/buttons/button';
import CardGit from './cardGitIcons'
interface GitProjectProps {
    name: string;
    url: string;
    language: {};
    desc: string;
    created_at: string;
    gitIcons: any[]

}

export default function GitHubProjects({ name, url, language, desc, created_at, gitIcons }: GitProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [spanWidth, setSpanWidth] = useState(0)
    const gitIconsList = gitIcons
    const valueLanguage: any[] = Object.values(language)
    const nameLanguage: any[] = Object.keys(language)
    const calculateWidth = () => {
        const arraySort = valueLanguage.sort((a, b) => b - a)
        const totalValue = arraySort.reduce((acc, curr) => acc + curr, 0);
        const totalPercent = valueLanguage.map(lang => lang / totalValue);
        const widths = totalPercent.map(percent => percent * spanWidth);
        return widths
    }
    const setImageLanguage = (name: string) => {
        const imgLanguage = {
            HTML: 'html5',
            CSS: 'css3',
            'C#': 'csharp',
            Java: 'openjdk',
        };

        return (name === 'HTML' || name === 'CSS' || name === 'C#' || name === 'Java') && imgLanguage[name as keyof typeof imgLanguage] || name
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
            shell: '#ffb300',
            sass: '#CC6699',
            "c#": '#512BD4',
        }

        return nameLanguage.map((item, index) => (
            {
                width: `${width[index]}%`,
                height: '5px',
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
                    <div className={style.Title}>
                        <h1>{name}</h1>
                    </div>
                    <figure className={style.containerImg}>
                        <img src='https://avatars.githubusercontent.com/u/87612240?v=4' alt='' />
                    </figure>
                </aside>
                <aside>
                    <div className={style.containerDesc}>
                        <p className={style.text}>{desc}</p>
                        <ButtonLink to={url} target='_blank' style={{ padding: '10px 20px', margin: '0px 10px 0px 0px' }}> { arrowRight } </ButtonLink>
                    </div>
                    <div className={style.flex} style={{ gap: '15px', justifyContent: 'flex-end', width: '98%' }}>
                        <div className={style.containerGitIcons}>
                            <ul>
                                {gitIconsList && gitIconsList.map((item, index) => (
                                    <li key={index + 4}>
                                        <CardGit item={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {nameLanguage.map((lang, index) => (
                            <figure className={style.containerLanguageImg} key={index + 4}>
                                <img src={`https://cdn.simpleicons.org/${setImageLanguage(lang)}`} />
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