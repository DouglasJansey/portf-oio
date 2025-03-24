/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-duplicate-props */
'use client'
import dynamic from "next/dynamic"
import Resume from './resumeAboutMe'
const AboutMe = dynamic(() => import('./about'))

interface AboutMeProps {
  params?: string;
}

export default function About({params}: AboutMeProps) {
  return(
    <>
    {params && <AboutMe/> }
    {!params && <Resume /> } 
    </>
  )
}
