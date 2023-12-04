
//import { Inter } from 'next/font/google'
import '../../styles/globals.sass'
import Header from '@/components/header/header'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  )
}
