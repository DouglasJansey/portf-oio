import dynamic from "next/dynamic"

const Main = dynamic(() => import('../components/main/main'))
const About = dynamic(() => import('../components/aboutme/aboutme'))
export default function Home() {
  return (
    <div>
      <Main />
      <About/>
    </div>
  )
}
