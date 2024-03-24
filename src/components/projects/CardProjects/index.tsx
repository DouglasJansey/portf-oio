/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import style from './cardProject.module.sass';
import LanguageCard from './languagesCards'
import { ButtonLink } from '@/components/buttons/button';


interface CardProjectProps {
    value: {
        name: string;
        url: string;
        situation: string;
        role: string;
        desc: string;
        languages: {
            frontend: string[];
            backend: string[];
        }
    },
}

export default function CardProjects({ value }: CardProjectProps) {
    const cardName = value.name.toLowerCase().replace(/[^a-z]/, '').replace(' ', '')

    return (
        <article className={style.container}>
            <aside className={style.containerImg}>
                <figure>
                    <img src={`/images/cardProject/${cardName}.jpg`} alt={cardName} />
                </figure>
            </aside>
            <aside className={style.containerText}>
                <p className={style.Title}>{value.name}</p>
                <p className={style.text}>
                    {value.desc}
                </p>
                <span className={style.containerLanguages} 
                style={{display: value.languages.frontend.length > 0 ? 'flex' : 'none'}}
                >
                    {value.languages.frontend.length > 0 &&
                        (value.languages.frontend.map((name, index) => (
                            <li key={index + 3}>
                               {<LanguageCard value={{name, index}}/>}
                            </li>
                        )))
                    }
                </span>
                <span className={style.containerLanguages} 
                style={{display: value.languages.backend.length > 0 ? 'flex' : 'none'}}>
                    {value.languages.backend.length > 0 &&
                        (value.languages.backend.map((name, index) => (
                            <li key={index + 2}>
                                   {<LanguageCard value={{name, index}}/>}
                            </li>
                        )))
                    }
                </span>
                <div className={style.containerButton}>
                        <ButtonLink to={value.url} target='_blank'>
                            Visite o site
                        </ButtonLink>
                </div>
            </aside>
        </article>
    )
}