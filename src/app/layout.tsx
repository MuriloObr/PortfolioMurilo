import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Murilo D. Obregão",
  description: "Desenvolvedor Web FullStack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
