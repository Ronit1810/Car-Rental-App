"use client"

import React from "react";
import CarCard from "../Home/CarCard";

import {AiFillCar} from "react-icons/ai"
import Image from "next/image";
import Form from "./Form";


function BookingModal({ car }: any) {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      
      <div>
        <h1 className=" text-4xl font-extrabold dark:text-gray-600">
          Rent Your Car
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col  md:mt-8 gap-5 items-center pt-6">
          <Image src={car?.image?.url} alt="image" width={300} height={350} />   
          <div>
            <h2>{car.name}</h2> 
            <h2>&#8377;{car.price}<span className=" text-xs">/day</span></h2> 
          </div> 
        </div>

        <div>
          <Form car = {car}/>
        </div>

      </div>
      
    </div>
  );
}

export default BookingModal;
