/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import { useEffect, useRef, useState } from "react";
import { arrowRight } from '../../../../imports/reactIcons';
import { skills } from '../../../../info'
import { Card } from '../../../../imports/componentsimport'
import { usePathname } from "next/navigation";
import { changeState } from '../../../../state'
import Course from "../course";

import style from "./skills.module.sass";
import { BsArrow90DegDown } from "react-icons/bs";
interface ButtonProps extends React.MouseEvent<HTMLElement> {
  target: HTMLButtonElement & {
    name: string
  }
}

export default function Skills() {
  const [positionX, setPositionX] = useState(0)
  const [listWidth, setListWidth] = useState<number | null>(null)
  const [bodyWidth, setBodyWidth] = useState<number>(0)
  const pathname = usePathname();
  const [imgIndex, setIndexImage, cardPosition, setCardPosition] = changeState((state) => [state.imgIndex,
  state.setIndexImage, state.cardPosition, state.setCardPosition])
  const ref = useRef<HTMLDivElement>(null)
  const { name, exp, time } = skills[imgIndex]

  const handleButtonPosition = (e: any, increment: number) => {

    const button = e.target.name;
    const validListWidth = Number(listWidth) || 0;
    const maxWidth = bodyWidth - validListWidth;

    const position = button === 'left' ?
      Math.min(positionX - increment, 0)
      : Math.max(maxWidth - 20, positionX - increment)
    setPositionX(position)

  };
  console.log(pathname.replace(/[^\w\s]/, ''))
  //UTILIZANDO A REFERÊNCIA PARA AVANÇAR AUTOMATICAMENTE QUANDO O CARD  SELECIONADO SAIR DA TELA
  const handleNextAndBackButton = (increment: number, e: any) => {
    const buttonName = e.target.name;
    const direction = buttonName === 'next' ? Math.min(imgIndex + increment, skills.length - 1) : Math.max(0, imgIndex + increment);
    setIndexImage(direction)
    controlNextAnBackAuto(bodyWidth, buttonName)
  }
  const controlNextAnBackAuto = (screenWidth: number, buttonType: string) => {
    const validListWidth = Number(listWidth) || 0;
    const maxWidth = bodyWidth - validListWidth;

    const direction = {
      next: Math.max(maxWidth - 20, positionX - +90),
      back: Math.min(positionX + 90, 0),
    }
    if (cardPosition! >= (screenWidth - 180) && buttonType === 'next') {
      const moveNext = direction[buttonType as keyof typeof direction]
      setPositionX(moveNext)
    } else if (cardPosition! <= 20 && buttonType === 'back') {
      const moveNext = direction[buttonType as keyof typeof direction]
      setPositionX(moveNext)
    }
  }
  const changeColorImage = (name: string): string => {
    const changeColor = {
      'next.js': 'white',
      'prisma': '006938',
      'dotnet': '6b028b',
    }
    const changed: string = changeColor[name as keyof typeof changeColor] &&
      changeColor[name as keyof typeof changeColor] ||
      ''
    return changed
  }
  useEffect(() => {
    const handleResize = () => {
      const body = document.body.clientWidth;
      const div = ref.current?.clientWidth || 0;
      setListWidth(div);
      setBodyWidth(body);
    };
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  const CalcEmptySpace = () => {
    const emptySpace = ((positionX + (2 * -positionX)) - listWidth!) + bodyWidth
    if (emptySpace > 20) {
      setPositionX(positionX + emptySpace);
    }
  }
  //redimensiona o lista caso haja um espaço vazio
  useEffect(() => {
    CalcEmptySpace()
  }, [bodyWidth])

  return (
    <section className={style.mainContainer}>
      <span>
        <p className={style.Title}>Habilidades</p>
      </span>
      <article className={style.subContainer}>
        <aside className={style.containerImg}>
          <p className={style.Title}>{name}</p>
          <figure>
            <img src={`https://cdn.simpleicons.org/${name.toLocaleLowerCase().replace('-', '')}/${changeColorImage(name.toLocaleLowerCase().replace('-', ''))}`} />
          </figure>
        </aside>
        <aside className={style.containerText}>
          <h1 className={style.Title}>
            Experiência - {exp}
          </h1>
          <p className={style.text}>Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
            Possimus distinctio vitae corrupti asperiores itaque nam
            reiciendis unde numquam, architecto,
            eum recusandae non quia voluptas illum at
            consequatur sit pariatur voluptatum?
          </p>
          <div className={style.containerButton}>
            <button className={style.button}
              type="button"
              name="back"
              onClick={(e) => handleNextAndBackButton(-1, e)}
            >Voltar</button>
            <button className={style.button}
              type="button"
              name="next"
              onClick={(e) => handleNextAndBackButton(+1, e)}
            >Próximo</button>
          </div>
        </aside>
      </article>
      <div className={style.containerIcons}>
        <button className={style.containerArrow}
          type="button"
          style={{ rotate: '180deg', left: 0 }}
          name="left"
          onClick={(e) => handleButtonPosition(e, -90)}
        >
          {arrowRight}
        </button>
        <button className={style.containerArrow}
          type="button"
          style={{ right: 0 }}
          name="right"
          onClick={(e) => handleButtonPosition(e, +90)}
        >
          {arrowRight}
        </button>
        <div style={{ translate: positionX, transition: 'all 0.5s ease-in-out' }} ref={ref}>
          <ul>
            {skills.map((value, index) => (
              <div key={index + 2}>
                {
                  Card({ value, index })
                }
              </div>
            ))}
          </ul>
        </div>
      </div>
      {pathname.replace(/[^\w\s]/, '') === 'habilidades' && <Course />}
      
    </section>
  );

}
