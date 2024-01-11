import dynamic from "next/dynamic";
// dynamic import
const Main = dynamic(() => import('../src/components/main'))
const About = dynamic(() => import('../src/components/aboutme'))
const Skills = dynamic(() => import('../src/components/skills'))
const Languages = dynamic(() => import('../src/components/aboutme/about/languages'))
const Experience = dynamic(() => import('../src/components/aboutme/about/experience'))

export const main = <Main />
export const about = <About />
export const skills = <Skills />
export const languages = <Languages />
export const experience = <Experience />


