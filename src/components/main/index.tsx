'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import style from "./Main.module.sass";
import { Button } from "../buttons/button";
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
              <p className={style.textTitle}>{handleTextIntro()}</p>
            </div>
            <div className={style.containerTextMiddle}>
              <p className={style.textMiddle}>
                Olá, me chamo Douglas Jansey e sou um Desenvolvedor Web
              </p>
            </div>
            <div className={style.containerTextDesc}>
              <p className={style.textDesc}>
                Sou um desenvolvedor full stack com conhecimento em linguagens de
                front-end e back-end, além de modelagem de dados, bancos
                relacionais e não relacionais
              </p>
            </div>
            <div className={style.containerLinks}>
              <Link
                href={`https://wa.me//55${phoneNumber}?text=`}
                target="blank"
              >
                <span className={style.containerContato}>
                  <p>Vamos bater um papo!</p>
                </span>
              </Link>
              <span className={style.containerPortfolio}>
                <Button to={curriculo}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '15px 70px',
                    background: 'blue',
                  }}
                >
                  <p>Baixar Curriculo</p>
                  {arrowRight}
                </Button>
                {download && <iframe src={download} style={{ display: 'none' }}></iframe>}
              </span>
            </div>
          </div>
        </div>
        <div className={style.containerRight}>
          <div className={style.containerImage}>
            <div className={style.containerPhoto}>
              {/* <img src="/images/foto1.png" alt="" /> */}
            </div>
            <img src="/images/forma.png" alt="" />
          </div>
          <span className={style.containerSocial}>
            <p>Confira e me siga</p>
            <div className={style.containerLinkSocial}>
              <span>
                <Link
                  href={"https://www.instagram.com/doug.jansey/"}
                  target="blank"
                >
                  {instagram}
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
                  {github}
                </Link>
                <Link
                  href={"https://www.facebook.com/douglas.jansey"}
                  target="blank"
                >
                  {facebook}
                </Link>
              </span>
            </div>
          </span>
        </div>

      </div>
    </>
  );
}
