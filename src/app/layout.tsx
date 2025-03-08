
//import { Inter } from 'next/font/google'
'use client'
import '../../styles/globals.sass'
import Header from '@/components/header'
import Footer from '@/components/footer'
import localFont from 'next/font/local'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

const bebas = localFont({
  src: './fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas',
  weight: '400',
})
const loft = localFont({
  src: './fonts/Loft-Bold.otf',
  variable: '--font-loft',
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${loft.variable}`} >
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  )
}
