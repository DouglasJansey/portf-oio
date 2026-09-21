import type { Metadata, Viewport } from 'next'
import '../../styles/globals.sass'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from './providers'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://douglasjansey.vercel.app'
const description =
  'Portfólio de Douglas Jansey, desenvolvedor Full Stack com experiência em React, Next.js, Node.js, Typescript, C# e Java.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Douglas Jansey | Desenvolvedor Full Stack',
    template: '%s | Douglas Jansey',
  },
  description,
  keywords: [
    'Douglas Jansey',
    'desenvolvedor full stack',
    'React',
    'Next.js',
    'Typescript',
    'portfólio',
  ],
  authors: [{ name: 'Douglas Jansey' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Douglas Jansey',
    title: 'Douglas Jansey | Desenvolvedor Full Stack',
    description,
    images: [{ url: '/images/douglasjansey.png', width: 1200, height: 630, alt: 'Douglas Jansey' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Douglas Jansey | Desenvolvedor Full Stack',
    description,
    images: ['/images/douglasjansey.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
