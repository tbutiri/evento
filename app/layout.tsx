import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Container from "@/app/components/container";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evento - Find events around you',
  description: 'Search for more than 10,000 events in the whole world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Container>
            <Header/>
                {children}
            <Footer/>
        </Container>
      </body>
    </html>
  )
}
