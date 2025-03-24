/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import style from "./experience.module.sass";
import { experience } from '../../../../../services/info'

export default function Languages() {
  const existYear: string[] = [];

  const filterYear = (value: string) => {
    const year = value.replace(/\D/g, '').substring(0, 4)
    if (existYear.includes(year)) {
      return ''
    } else {
      existYear.push(year)
      return year
    }
  }

  return (
    <div className={style.mainContainer}>
      <article className={style.containerTitle}>
        <h1>Experiências</h1>
      </article>
      <div className={style.subContainer}>
        <figure className={style.containerImg}>
          <img src="/images/menu.png" alt="" />
        </figure>
        <div>
          <div className={style.containerExp}>
            {experience.map((item, index) => (
              <div key={index + 1}>
                <div>
                  <p className={style.floatYear}>
                    {filterYear(item.ano)}
                  </p>
                  <p className={style.subTitle}>{item.title}</p>
                </div>
                <p className={style.subText}>{item.ano}</p>
                <ul>
                  {item.funcao.map((func, index) => (
                    <li key={index + 10}>{func}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
