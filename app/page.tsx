"use client"

import Image from 'next/image'

import NavBar from '@/Components/NavBar'
import Hero from '@/Components/Home/Hero'
import SearchInput from '@/Components/Home/SearchInput'
import CarCatalog from '@/Components/Home/CarCatalog'
import { getCarList } from '@/Services'
import { useEffect, useState } from 'react'
import CarList from '@/Components/Home/CarList'

export default function Home() {

  const [carsData, setCarsData] = useState<any>([])
  useEffect(() => {
    getCars();
  },[])
  const getCars = async() =>{
    const result:any = await getCarList();
    setCarsData(result?.carLists)    
  }

  return (
    <div>
      <NavBar />
      <div className=' px-5 md:px-10'>
        <Hero />
        <SearchInput />
        <CarCatalog/>
        <CarList carsData = {carsData}/>

      </div>
    </div>
  )
}
