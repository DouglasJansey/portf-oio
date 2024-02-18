'use client'
import { useEffect, useState } from 'react';
import style from './githubRepo.module.sass';

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

export default function GitHubProjects() {
    return (
        <article className={style.container}>
            {/* <aside className={style.containerImg}>
            </aside>
                <aside className={style.containerText}>
                    <p className={style.Title}></p>
                    <p className={style.text}>
                        
                    </p>
                    <div className={style.containerButton}>
                        <a href="#" target='blank'>
                            <button type='button' className={style.button}>
                                Visite o site
                            </button>
                        </a>
                    </div>
                </aside> */}
        </article>
    )
}