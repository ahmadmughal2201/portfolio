'use client'
import Image from 'next/image'
import NavBar from './components/navBar'
import Design from './components/design'
import Projects from './components/projects'
import FloatingNavbar from './components/float'
import AboutMe from './components/aboutMe'
import Technologies from './components/tech'
import ContactMe from './components/contact'
import YouTubeVideo from './components/video'
import Footer from './components/footer'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function Home() {
  
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main className='min-h-screen dark:bg-primaryDark'>
      <NavBar></NavBar>
      <Design className=' '></Design>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <Projects ></Projects>
      <YouTubeVideo></YouTubeVideo>
      <ContactMe></ContactMe>
      <FloatingNavbar></FloatingNavbar>
      <Footer> </Footer>
    </main>
  )
}
