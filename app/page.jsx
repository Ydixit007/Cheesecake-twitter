import Navbar from '@/components/Navbar'
import AboutSection from '@/sections/AboutSection'
import HomeSection from '@/sections/HomeSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HomeSection />
      <AboutSection />
    </div>
  )
}
