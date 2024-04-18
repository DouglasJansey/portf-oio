'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import style from "./Main.module.sass";
import { ButtonLink } from "../buttons/button";
import { facebook, instagram, linkedin, github, arrowRight } from '../../../imports/reactIcons'


export default function Main() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const curriculo: string = process.env.NEXT_PUBLIC_CURRICULO!;
  const data = new Date(Date.now()).getHours()
  const [hour, setHour] = useState('')
  const [download, setDownload] = useState("")

  const handleTextIntro = () => {
    const hours = {
      dia: 'Bom dia!',
      tarde: 'Boa tarde!',
      noite: 'Boa noite!'
    }
    return hours[hour as keyof typeof hours]
  }
  const filterFirstWord = (word: string) => {
    const wordArr = word.split(' ')
    return (
      <div>
        {wordArr.map((value, index) => (
          <span key={index + 3}>
            <h3 style={{ color: '#ffc979' }}>
              {value.substring(0, 1)}
            </h3>
            {value.substring(1, value.length)}
          </span>
        ))}
      </div>
    )
  }
  const changeColor = (word: string) => {
    return (
      <>
        <p style={{ color: '#ffc979' }}>
          {word}
        </p>
      </>
    )
  }
  const handleDonwload = () => {
    setDownload(curriculo)
    setTimeout(() => {
      setDownload('')
    }, 3000)
  }
  useEffect(() => {

    if (data >= 0 && data < 12) {
      setHour('dia');
    } else if ((data >= 12 && data < 19)) {
      setHour('tarde');
    } else {
      setHour('noite')
    }


  }, [data])
  return (
    <>
      <div className={style.containerMain}>
        <div className={style.containerText}>
          <div className={style.containerDeveloperWeb}>
            <p>Desenvolvedor Full Stack</p>
          </div>
          <div className={style.containerMainText}>
            <div className={style.containerTextDesc}>
              <p className={style.textTitle} style={{ color: "#ffc979" }}>{handleTextIntro()}</p>
            </div>
            <div className={style.containerTextMiddle}>
              <div className={style.textMiddle}>
                <div>
                  Me chamo

                  {filterFirstWord('Douglas Jansey')}

                  Sou um Desenvolvedor Full Stack
                </div>
              </div>
            </div>
            <div className={style.containerTextDesc}>
              <p>
                Sou um desenvolvedor com conhecimento em linguagens como: <span className={style.colorSpan}>Javascript, Typescript, C# e Java</span>,
                além de alguns frameworks como: <span className={style.colorSpan}>ReactJS, NextJS, Express, Spring Boot, Entity framework</span>,
                além de modelagem de dados e banco de dados como: <span className={style.colorSpan}>Mysql, PostgreSql e MongoDB</span>, 
                entre outras ferramentas como: <span className={style.colorSpan}>Jest, Redux, Zustand, Lombok, Api Rest, Sass e Styled-Components</span>.
              </p>
            </div>
            <div className={style.containerLinks}>
              <ButtonLink
                to={`https://wa.me//55${phoneNumber}?text=`}
                target="blank"
              >
                <p>Vamos bater um papo!</p>
              </ButtonLink>
              <span className={style.containerPortfolio}>
                <ButtonLink to={curriculo}>
                  <p>Baixar Curriculo</p>
                  {arrowRight}
                </ButtonLink>
                {download && <iframe src={download} style={{ display: 'none' }}></iframe>}
              </span>
            </div>
          </div>
        </div>
        <div className={style.containerRight}>
          <div className={style.containerImage}>
            <div className={style.containerPhoto}>
              <img src="/images/developerIcon.png" alt="" />
            </div>
          </div>
          <div className={style.containerSocial}>
            <p>Confira e me siga</p>
            <div className={style.containerLinkSocial}>
              <span>
                <Link
                  href={"https://www.instagram.com/doug.jansey/"}
                  target="blank"
                >
                  {instagram(25)}
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/douglasjansey/"}
                  target="blank"
                >
                  {linkedin}
                </Link>
                <Link
                  href={"https://github.com/DouglasJansey"}
                  target="blank"
                >
                  {github(25)}
                </Link>
                <Link
                  href={"https://www.facebook.com/douglas.jansey"}
                  target="blank"
                >
                  {facebook}
                </Link>
              </span>
            </div>
          </div>
        </div>

      </div >
    </>
  );
}
