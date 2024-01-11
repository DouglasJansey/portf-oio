/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import dynamic from "next/dynamic"
import { skills } from "../../../imports";
const About = dynamic(() => import('../../components/aboutme'))

interface AboutMeProps {
    path: string;
}

export default function AboutMe({ params }: { params: AboutMeProps}) {
  const { path } = params 
  const pathname = {
    sobremim: < About params={path} />,
    habilidades: skills
  }
  console.log(path)
  return (
    <>
      {path && pathname[path as keyof typeof pathname]}
    </>
  )
}
