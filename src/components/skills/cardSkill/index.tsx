import style from './card.module.sass';
import { changeState } from '../../../../state'
import { useEffect, useRef } from 'react';
import { csharp, contextApi, zustandIcon } from '../../../../imports/reactIcons';

interface CardProps {
    value: {
        name: string,
        exp: string,
        time: string
    },
    index: number,
}

export default function CardSkill({ value, index }: CardProps) {
    const skillName = value.name.toLowerCase().replace(/( )+/g, "").replace('-', '')
    const refCard = useRef<HTMLLabelElement>(null);
    const [setCardPosition, cardPosition] = changeState((state) => [state.setCardPosition, state.cardPosition])

    const [setIndexImage, imgIndex] = changeState((state) => [state.setIndexImage, state.imgIndex])
    const noImage = (names: string) => {
        const filterName = names.replace(' ', '')
        const namesLanguage = {
            csharp: csharp({ color: 'cyan', size: 30 }),
            contextapi: contextApi({ color: 'cyan', size: 30 }),
            zustand: zustandIcon,
            java: <img src='/images/cardProject/java.svg' alt='' style={{fill: '#00f0ff'}}/>
        }
            return (skillName !== 'csharp') && (skillName !== 'contextapi') && (skillName !== 'zustand') &&(skillName !== 'java') ? (<>
                <img src={`https://cdn.simpleicons.org/${skillName}/cyan`} />
            </>
            ) : (<>
                {namesLanguage[filterName as keyof typeof namesLanguage]}
            </>
            )
        
   
    }
    useEffect(() => {
        const cardPositionX = refCard.current?.getBoundingClientRect().x!;
        if (index === imgIndex && cardPosition !== cardPositionX) {
            setCardPosition(cardPositionX);
        }
    }, [index, imgIndex, cardPosition, setCardPosition]);

    return (
        <>
            <div className={style.list}>
                <input className={style.input} type="radio" id={skillName}
                    name="icons"
                    onChange={(e) => setIndexImage(index)}
                    checked={index === imgIndex}

                />
                <label className={style.icon} htmlFor={skillName} ref={refCard}>
                    <figure >
                        {noImage(skillName)}
                    </figure>
                    <span className={style.textIcon}>
                        {value.name}
                    </span>
                </label>
            </div>

        </>
    )
}