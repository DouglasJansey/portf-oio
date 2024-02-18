/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import dynamic from "next/dynamic"
import Resume from './resumeSkills'
const AboutMe = dynamic(() => import('./resumeSkills'))

interface SkillsProps {
  params?: string;
}

export default function Skills({params}: SkillsProps) {
  return(
    <>
    {params && <AboutMe/> }
    {!params && <Resume /> }
    
    </>
  )
}
