
import { about, skills, main,  } from '../../imports';
import Projects from "../components/projects"


export default function Home() {
  return (
    <>
      {/* <article>
        {main}
      </article> */}
      {/* <article>
        {skills}
      </article> */}
      <article>
        <Projects />
      </article>
    </>
  )
}
