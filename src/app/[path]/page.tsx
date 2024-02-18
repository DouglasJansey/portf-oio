/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import dynamic from "next/dynamic"
const About = dynamic(() => import('../../components/aboutme'))
const Skills = dynamic(() => import('../../components/skills'))
const Projects = dynamic(() => import('../../components/projects'))

interface AboutMeProps {
    path: string;
}

export default function AboutMe({ params }: { params: AboutMeProps}) {
  const { path } = params 
  const pathname = {
    sobremim: < About params={path} />,
    habilidades: < Skills params={path} />,
    projetos: <Projects />
    }
  return (
    <>
      {path && pathname[path as keyof typeof pathname]}
    </>
  )
}
