import Image from 'next/image'

import NavBar from '@/Components/NavBar'
import Hero from '@/Components/Home/Hero'
import SearchInput from '@/Components/Home/SearchInput'
import CarCatalog from '@/Components/Home/CarCatalog'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className=' px-5 md:px-10'>
        <Hero />
        <SearchInput />
        <CarCatalog/>

      </div>
    </div>
  )
}
