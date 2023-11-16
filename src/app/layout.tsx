import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Barlow } from 'next/font/google'

const inter = Barlow({
  weight: ['800', '600', '400', '300', '100'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Murilo D. Obregão',
  description: 'Desenvolvedor Web FullStack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <div className="bg-defaultBG">
          {children}
          <Footer />
          <a
            href="#start"
            className="sticky bottom-3 left-full z-50 mr-3 h-fit w-fit rounded-md bg-primary p-3"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </body>
    </html>
  )
}
