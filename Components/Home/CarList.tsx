"use client"

import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../Booking/BookingModal'

const CarList = (props:any) => {
  const[selectedCar, setSelectedCar] = useState<any>([])
  return (
    <div  className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {props.carsData.map((car: any, index: number)=>(
            <div key={index} className=' m-2 flex  justify-center rounded-lg' onClick={()=>{document.getElementById('my_modal_4').showModal(); setSelectedCar(car)}}>
                <CarCard car = {car} />
            </div>
        ))}

          {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_4" className="modal">
  <BookingModal car={selectedCar} />
</dialog>
    </div>
  )
}

export default CarList