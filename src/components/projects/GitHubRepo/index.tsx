'use client'
import style from './githubRepo.module.sass';
import { arrowRight } from '../../../../imports/reactIcons'
import { ButtonLink } from '@/components/buttons/button';
import CardGit from './cardGitIcons'

interface GitIcon {
    value: number;
    name: string;
}
interface GitProjectProps {
    name: string;
    url: string;
    language: { [key: string]: number }; // Tipando o objeto de linguagens
    desc: string;
    created_at: string;
    gitIcons: GitIcon[];
}

const LANGUAGE_COLORS: Record<string, string> = {
    javascript: '#F7DF1E',
    typescript: '#3178C6',
    html: '#E34F26',
    css: '#1572B6',
    sass: '#CC6699',
    scss: '#CC6699',
    ejs: '#B4CA65',
    java: '#CC0000',
    shell: '#ffb300',
    'c#': '#512BD4',
    python: '#3776AB',
    php: '#777BB4',
    dockerfile: '#2496ED',
}
const FALLBACK_COLOR = '#676e7b'

const ICON_SLUGS: Record<string, string> = {
    HTML: 'html5',
    CSS: 'css3',
    'C#': 'csharp',
    Java: 'openjdk',
}

export default function GitHubProjects({ name, url, language, desc, created_at, gitIcons }: GitProjectProps) {
    const entries = Object.entries(language ?? {})
    const total = entries.reduce((acc, [, bytes]) => acc + bytes, 0)

    // Percentuais calculados sobre o total de bytes; a largura é relativa ao
    // container, então não depende de medir o elemento no cliente.
    const languageBars = entries
        .sort(([, a], [, b]) => b - a)
        .map(([lang, bytes]) => ({
            lang,
            width: total ? (bytes / total) * 100 : 0,
            color: LANGUAGE_COLORS[lang.toLowerCase()] ?? FALLBACK_COLOR,
        }))

    const iconSlug = (lang: string) => ICON_SLUGS[lang] ?? lang.toLowerCase()

    return (
        <article>
            <div className={style.card}>
                <aside className={style.containerTitle}>
                    <div className={style.Title}>
                        <h1>{name}</h1>
                    </div>
                    <figure className={style.containerImg}>
                        <img src='https://avatars.githubusercontent.com/u/87612240?v=4' alt='Avatar do GitHub' />
                    </figure>
                </aside>
                <aside>
                    <div className={style.containerDesc}>
                        <p className={style.text}>{desc}</p>
                        <ButtonLink to={url} target='_blank' style={{ padding: '10px 20px', margin: '0px 10px 0px 0px' }}> {arrowRight} </ButtonLink>
                    </div>
                    <div className={style.flex} style={{ gap: '15px', justifyContent: 'flex-end', width: '98%' }}>
                        <div className={style.containerGitIcons}>
                            <ul>
                                {gitIcons?.map((item, index) => (
                                    <li key={index + 4}>
                                        <CardGit item={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {languageBars.map(({ lang }) => (
                            <figure className={style.containerLanguageImg} key={lang}>
                                <img src={`https://cdn.simpleicons.org/${iconSlug(lang)}`} alt={lang} title={lang} />
                            </figure>
                        ))}
                    </div>
                    <div className={style.containerLanguages}>
                        {languageBars.map(({ lang, width, color }) => (
                            <span
                                key={lang}
                                title={`${lang} — ${width.toFixed(1)}%`}
                                style={{ width: `${width}%`, height: '5px', background: color }}
                            />
                        ))}
                    </div>
                </aside>
            </div>
        </article>
    )
}
