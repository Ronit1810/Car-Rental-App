import Image from 'next/image'

import NavBar from '@/Components/NavBar'
import Hero from '@/Components/Home/Hero'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className=' p-5 md:p-10'>
        <Hero />

      </div>
    </div>
  )
}
