/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import style from './languagesCards.module.sass';

interface CardProjectProps {
    value: {
        name: string;
        index: number;
    },
}

export default function LanguageCards({ value }: CardProjectProps) {
    const [modalLanguage, setModalLanguage] = useState(false)

    const filterImage = (): string => {
        const nameFilter = value.name.toLocaleLowerCase().replace('-', '').replace(/\s/g, '')
        const urlImages: string = `https://cdn.simpleicons.org/${nameFilter}/white`;
        const localImage: string = `/images/cardProject/${value.name}.png`;
        const Image = ((nameFilter !== 'bcrypt') && (nameFilter !== 'zustand')) ? urlImages : localImage
        return Image
    }

    const modalImageName = (e: any) => {
        const typeEvent = e.type
        const openModal = {
            mouseover: true,
            mouseleaver: false,
        }
        setModalLanguage(openModal[typeEvent as keyof typeof openModal])
    }
    return (
        <article>
            <span className={style.containerLanguages} 
               onMouseOver={(e) => modalImageName(e)}
               onMouseLeave={(e) => modalImageName(e)}>
                <p className={style.text}
                    style={{ visibility: modalLanguage ? 'visible' : 'hidden' }}
                    >
                    {value.name}
                </p>
                <figure>
                    <img src={filterImage()} alt={value.name} />
                </figure>
            </span>
        </article>
    )
}