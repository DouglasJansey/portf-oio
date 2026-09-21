'use client'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import style from './projects.module.sass'
import { projects } from '../../../services/info'
import { projectSlug } from './projectSlug'
import { ButtonLink } from '@/components/buttons/button'

const TOTAL = projects.length

// Cada situacao ganha um tom proprio dentro da paleta: ciano para entregue,
// claro para em andamento, apagado para interrompido.
const statusClass = (situation: string) => {
  const key = situation.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  if (key === 'concluido') return style.statusDone
  if (key === 'andamento') return style.statusLive
  return style.statusStopped
}

export default function Projects() {
  const [[current, direction], setSlide] = useState<[number, number]>([0, 0])
  // O preview padrao e a imagem: carregar o site externo como plano de fundo
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
  const stacks = [
    { label: 'Front-end', items: project.languages.frontend },
    { label: 'Back-end', items: project.languages.backend },
  ].filter((group) => group.items.length > 0)

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
              <iframe src={project.url} title={`Site do projeto ${project.name}`} loading="lazy" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`/images/cardProject/${slug}.jpg`} alt={`Tela do projeto ${project.name}`} />
            )}
          </motion.div>
        </AnimatePresence>
        <div className={style.scrim} aria-hidden="true" />
      </div>

      <div className={style.content}>
        <AnimatePresence mode="wait">
          <motion.article
            key={current}
            className={style.panel}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.08 }}
          >
            <header className={style.panelHead}>
              <span className={`${style.status} ${statusClass(project.situation)}`}>
                <i aria-hidden="true" />
                {project.situation}
              </span>
              <span className={style.kicker}>{project.type}</span>
            </header>

            <h2 className={style.name}>{project.name}</h2>
            <p className={style.role}>{project.role}</p>
            <p className={style.desc}>{project.desc}</p>

            <dl className={style.stacks}>
              {stacks.map((group) => (
                <div key={group.label} className={style.stackRow}>
                  <dt>{group.label}</dt>
                  <dd>
                    <ul className={style.chips}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <div className={style.actions}>
              <ButtonLink to={project.url} target="_blank">
                Visitar o site
              </ButtonLink>
              <button type="button" className={style.ghostBtn} onClick={() => setLive((v) => !v)}>
                {live ? 'Ver imagem' : 'Ver ao vivo'}
              </button>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

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

        <div className={style.pager}>
          <span className={style.counter}>
            <strong>{String(current + 1).padStart(2, '0')}</strong>
            <i aria-hidden="true" />
            {String(TOTAL).padStart(2, '0')}
          </span>
          <div className={style.arrowGroup}>
            <button type="button" onClick={() => paginate(-1)} aria-label="Projeto anterior" className={style.arrow}>
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button type="button" onClick={() => paginate(1)} aria-label="Próximo projeto" className={style.arrow}>
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
