"use client"

import Image from 'next/image'

import NavBar from '@/Components/NavBar'
import Hero from '@/Components/Home/Hero'
import SearchInput from '@/Components/Home/SearchInput'
import CarCatalog from '@/Components/Home/CarCatalog'
import { getCarList } from '@/Services'
import { useEffect, useState } from 'react'
import CarList from '@/Components/Home/CarList'
import ToastMsg from '@/Components/ToastMsg'
import { BookingContext } from '@/context/BookingContext'

export default function Home() {
  const [showToast, setShowToast] = useState<any>(false)
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
        <BookingContext.Provider value={{showToast, setShowToast}}>
          <Hero />
          <SearchInput />
          <CarCatalog/>
          <CarList carsData = {carsData}/>
          {/* below line tells that is showtoast is true then only <ToastMsg> else null */}
          {showToast? <ToastMsg /> : null}
        </BookingContext.Provider>

      </div>
    </div>
  )
}
