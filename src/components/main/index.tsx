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
  const iconsSize = 87

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
      <section className={style.containerMain}>
        <div className={style.containerText}>
          <figure className={style.containerPhoto}>
            <img src="/images/rosto.png" alt="foto" />
          </figure>
        </div>
        <div className={style.containerRight}>
          <div className={style.containerMainText}>
            <div>
              <h3>EU SOU</h3>
              <h1>Douglas</h1>
              <h2>FERREIRA</h2>
            </div>
            <div className={style.containerLinkSocial}>
              <span>
                <Link
                  href={"https://www.instagram.com/doug.jansey/"}
                  target="blank"
                >
                  {instagram(iconsSize)}
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/douglasjansey/"}
                  target="blank"
                >
                  {linkedin(iconsSize)}
                </Link>
                <Link
                  href={"https://github.com/DouglasJansey"}
                  target="blank"
                >
                  {github(iconsSize)}
                </Link>
                <Link
                  href={"https://www.facebook.com/douglas.jansey"}
                  target="blank"
                >
                  {facebook(iconsSize)}
                </Link>
              </span>
            </div>
          </div>
          {/* <ButtonLink
            to={`https://wa.me//55${phoneNumber}?text=`}
            target="blank"
          >
            <p>Vamos bater um papo!</p>
          </ButtonLink> */}
          <span className={style.containerPortfolio}>
            <figure>
              <a href='./DouglasJansey.pdf' download="CV_Douglas" target="_blank">
                <img src="/images/download.png" alt="imagem seta download" />
              </a>
            </figure>
            <div className={style.containerName}>
              <p>fullstack</p>
              <p>developer</p>
              <p>freelancer</p>
            </div>
          </span>
        </div>
      </section>
    </>
  );
}
