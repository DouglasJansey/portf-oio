import dynamic from "next/dynamic";
// dynamic import
const Main = dynamic(() => import('../src/components/main'))
const Languages = dynamic(() => import('../src/components/aboutme/about/languages'))
const Experience = dynamic(() => import('../src/components/aboutme/about/experience'))

export const main = <Main />
export const languages = <Languages />
export const experience = <Experience />
