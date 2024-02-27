/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import style from "./course.module.sass";
import { course } from '../../../../services/info'

export default function Course() {
  
  return (
    <section className={style.mainContainer}>
      <article className={style.containerTitle}>
        <h1>Cursos & Bootcamps</h1>
      </article>
      <div className={style.subContainer}>
        <article className={style.containerText}>
          <div>
            <aside className={style.containerCourse}>
              {course.map((item, index) => (
                <div key={index + 1}>
                  <p className={style.subTitle}>{item.courseName}</p>
                  <p className={style.text}>{item.month + ' ' + item.year}</p>
                  <p className={style.subText}>{item.desc}</p>
                </div>
              ))}
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}
