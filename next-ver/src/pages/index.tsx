import type { NextPage } from 'next'

import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { History } from '@/components/History'
import { MainVisual } from '@/components/MainVisual'
import { Skills } from '@/components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainVisual />
      <About />
      <Skills />
      <History />
      <Footer />
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
}
export default Home
