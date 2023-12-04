import Link from "next/link";
import style from "./Main.module.sass";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
export default function Main() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const curriculo = process.env.NEXT_PUBLIC_CURRICULO;

  return (
    <>
      <div className={style.containerMain}>
        <img src="/images/background.jpg" alt="" />
        <div className={style.containerLeft}>
          <div className={style.containerText}>
            <div className={style.containerDeveloperWeb}>
              <p>Desenvolvedor Web</p>
            </div>
            <div className={style.containerMainText}>
              <div className={style.containerTextDesc}>
                <p className={style.textTitle}>Boas vindas</p>
              </div>
              <div className={style.containerTextMiddle}>
                <p className={style.textMiddle}>
                  Olá, me chamo Douglas Jansey e sou um Desenvolvedor Web
                </p>
              </div>
              <div className={style.containerTextDesc}>
                <p className={style.textDesc}>
                  Sou um desenvolvedor web com conhecimento em linguagens de
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
                <Link href={curriculo} target="_parent">
                  <span className={style.containerPortfolio}>
                    <p> Baixar Curriculo</p>
                    <BsArrowUpRightSquareFill size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.containerRight}>
            <div className={style.containerImage}>
              <div className={style.containerPhoto}>
                <img src="/images/foto1.png" alt="" />
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
                    <FaInstagram size={25} />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/douglasjansey/"}
                    target="blank"
                  >
                    <FaLinkedin size={25} />
                  </Link>
                  <Link
                    href={"https://github.com/DouglasJansey"}
                    target="blank"
                  >
                    <FaGithub size={25} />
                  </Link>
                  <Link
                    href={"https://www.facebook.com/douglas.jansey"}
                    target="blank"
                  >
                    <FaFacebookSquare size={25} />
                  </Link>
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
