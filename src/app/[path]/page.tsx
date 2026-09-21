'use client'
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

const About = dynamic(() => import('../../components/aboutme'))
const Skills = dynamic(() => import('../../components/skills'))
const Projects = dynamic(() => import('../../components/projects'))
const Contact = dynamic(() => import('../../components/contact'))

export default function Section({ params }: { params: { path: string } }) {
  const { path } = params
  const sections = {
    sobremim: <About params={path} />,
    habilidades: <Skills params={path} />,
    projetos: <Projects />,
    contato: <Contact />,
  }

  const section = sections[path as keyof typeof sections]
  // Sem isso qualquer rota inválida renderizava uma página em branco com 200.
  if (!section) notFound()

  return <>{section}</>
}
