import type { Metadata } from 'next'

const titles: Record<string, { title: string; description: string }> = {
  sobremim: {
    title: 'Sobre mim',
    description: 'Trajetória, formação e experiência profissional de Douglas Jansey.',
  },
  habilidades: {
    title: 'Habilidades',
    description: 'Tecnologias, ferramentas e cursos que compõem o meu stack.',
  },
  projetos: {
    title: 'Projetos',
    description: 'Projetos pessoais e repositórios públicos no GitHub.',
  },
  contato: {
    title: 'Contato',
    description: 'Entre em contato comigo por e-mail ou pelas redes sociais.',
  },
}

export function generateMetadata({ params }: { params: { path: string } }): Metadata {
  const meta = titles[params.path]
  if (!meta) return {}
  return { title: meta.title, description: meta.description }
}

export function generateStaticParams() {
  return Object.keys(titles).map((path) => ({ path }))
}

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
