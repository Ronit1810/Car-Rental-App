"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { RiSteering2Fill } from "react-icons/ri";
import { BsFuelPump } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import BookingModal from "../Booking/BookingModal";

function CarCard(props: any) {
  const [car, setCar] = useState(props.car);
  return (
    // <div className=' flex' onClick={()=>document.getElementById('my_modal_4').showModal()}>
    <div className=" hover:border-[1px] cursor-pointer border-gray-500 group flex flex-col justify-between dark:bg-gray-800 bg-gray-100 rounded-lg p-4">
      <h1 className=" text-lg font-bold p-1">{car.name}</h1>
      <div className=" flex items-center">
        <h1 className=" p-1 text-sm font-light">&#8377;{car.price}</h1>
        <span className=" font-thin text-xs">/day</span>
      </div>
      <Image src={car?.image?.url} alt="car image" width={200} height={220} />
      <div className=" group-hover:hidden flex gap-[1px] justify-around">
        <div className=" text-gray-400">
          <FaCar className="w-full text-[22px] mb-1" />
          <h2 className=" dark:text-gray-500 text-black text-xs font-light">
            {car.carBrand}
          </h2>
        </div>

        <div className=" text-gray-400">
          <RiSteering2Fill className="w-full text-[22px] mb-1" />
          <h2 className=" dark:text-gray-500 text-black text-xs font-light">
            {car.carType}
          </h2>
        </div>

        <div className=" text-gray-400">
          <BsFuelPump className="w-full text-[22px] mb-1" />
          <h2 className=" dark:text-gray-500 text-black text-xs font-light">
            {car.carAvg} Km/l
          </h2>
        </div>
      </div>
      <button className=" hidden group-hover:flex w-full bg-slate-500 rounded-lg h-10 items-center gap-2 justify-center">
        Rent <IoMdSend />
      </button>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
}

export default CarCard;
