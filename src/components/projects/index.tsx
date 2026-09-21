'use client'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import style from './projects.module.sass'
import { projects } from '../../../services/info'
import { projectSlug } from './projectSlug'
import { ButtonLink } from '@/components/buttons/button'

const TOTAL = projects.length

export default function Projects() {
  const [[current, direction], setSlide] = useState<[number, number]>([0, 0])
  // O preview padrão é a imagem: carregar o site externo como plano de fundo
  // deixa a secao refem de 5 deploys de terceiros. O iframe entra sob demanda.
  const [live, setLive] = useState(false)
  const reduceMotion = useReducedMotion()

  const paginate = useCallback((dir: number) => {
    setLive(false)
    setSlide(([prev]) => [(prev + dir + TOTAL) % TOTAL, dir])
  }, [])

  const goTo = useCallback((index: number) => {
    setLive(false)
    setSlide(([prev]) => [index, index > prev ? 1 : -1])
  }, [])

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'ArrowRight') paginate(1)
      if (ev.key === 'ArrowLeft') paginate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [paginate])

  const project = projects[current]
  const slug = projectSlug(project.name)
  const tech = [...project.languages.frontend, ...project.languages.backend]

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: reduceMotion ? 0 : dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: reduceMotion ? 0 : dir * -60 }),
  }

  return (
    <section className={style.stage} aria-roledescription="carrossel" aria-label="Portfólio de projetos">
      <p className={style.ghostTitle} aria-hidden="true">PORTFÓLIO</p>

      <div className={style.viewport}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            className={style.media}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
            drag={reduceMotion ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) paginate(1)
              if (info.offset.x > 80) paginate(-1)
            }}
          >
            {live ? (
              <iframe
                src={project.url}
                title={`Site do projeto ${project.name}`}
                loading="lazy"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`/images/cardProject/${slug}.jpg`} alt={`Tela do projeto ${project.name}`} />
            )}
          </motion.div>
        </AnimatePresence>
        <div className={style.scrim} aria-hidden="true" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={style.info}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
          transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.1 }}
        >
          <span className={style.kicker}>{project.type}</span>
          <h2 className={style.name}>{project.name}</h2>
          <p className={style.desc}>{project.desc}</p>
          <ul className={style.chips}>
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={style.actions}>
            <ButtonLink to={project.url} target="_blank">
              Visitar o site
            </ButtonLink>
            <button type="button" className={style.ghostBtn} onClick={() => setLive((v) => !v)}>
              {live ? 'Ver imagem' : 'Ver ao vivo'}
            </button>
            <span className={style.counter}>
              <strong>{String(current + 1).padStart(2, '0')}</strong> / {String(TOTAL).padStart(2, '0')}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={style.controls}>
        <ul className={style.thumbs}>
          {projects.map((item, index) => (
            <li key={item.name}>
              <button
                type="button"
                onClick={() => goTo(index)}
                className={index === current ? style.thumbActive : style.thumb}
                aria-label={`Ver ${item.name}`}
                aria-current={index === current}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/cardProject/${projectSlug(item.name)}.jpg`} alt="" loading="lazy" />
                <span className={style.thumbName}>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className={style.arrowGroup}>
          <button type="button" onClick={() => paginate(-1)} aria-label="Projeto anterior" className={style.arrow}>
            <span aria-hidden="true">&#8592;</span>
          </button>
          <button type="button" onClick={() => paginate(1)} aria-label="Próximo projeto" className={style.arrow}>
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  )
}
