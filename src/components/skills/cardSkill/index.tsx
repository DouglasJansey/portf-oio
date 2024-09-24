import style from './card.module.sass';
import { changeState } from '../../../../state'
import { useEffect, useRef } from 'react';
import { csharp } from '../../../../imports/reactIcons';

interface CardProps {
    value: {
        name: string,
        exp: string,
        time: string
    },
    index: number,
}

export default function CardSkill({ value, index }: CardProps) {
    const skillName = value.name.toLowerCase().replace('-', '')
    const refCard = useRef<HTMLLabelElement>(null);
    const [setCardPosition, cardPosition] = changeState((state) => [state.setCardPosition, state.cardPosition])

    const [setIndexImage, imgIndex] = changeState((state) => [state.setIndexImage, state.imgIndex])


    useEffect(() => {
        const cardPositionX = refCard.current?.getBoundingClientRect().x!;
        if (index === imgIndex && cardPosition !== cardPositionX) {
            setCardPosition(cardPositionX);
        }
    }, [index, imgIndex, cardPosition, setCardPosition]);

    return (
        <>
            <li className={style.list}>
                <input className={style.input} type="radio" id={skillName}
                    name="icons"
                    onChange={(e) => setIndexImage(index)}
                    checked={index === imgIndex}

                />
                <label className={style.icon} htmlFor={skillName} ref={refCard}>
                    <p className={style.textIcon}>
                        {value.name}
                    </p>
                    <figure >
                        {skillName === 'csharp' ? (<div>
                            {csharp({color:'blue', size: 40})}
                        </div>
                        ) : (
                            <img src={`https://cdn.simpleicons.org/${skillName}/blue`} />
                        )}
                    </figure>
                </label>
            </li>

        </>
    )
}