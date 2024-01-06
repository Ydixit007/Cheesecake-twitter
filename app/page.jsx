import Navbar from '@/components/Navbar'
import AboutSection from '@/sections/AboutSection'
import HomeSection from '@/sections/HomeSection'
import MenuSection from '@/sections/MenuSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <MenuSection />
    </div>
  )
}
