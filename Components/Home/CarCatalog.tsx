import React from 'react'

const CarCatalog = () => {
  return (
    <div className=' mt-20 mb-16 flex justify-between'>
        <div>
            <h1 className=' text-2xl md:text-4xl font-semibold'>CarCatalogs</h1>
            <span className=' text-sm dark:text-gray-600 text-gray-400'>Explore our cars you might like</span>
        </div>
        
        <div className=' gap-4 md:flex'>
        <select className="select select-bordered w-full max-w-xs mb-2">
            <option disabled selected>Price</option>
            <option>0 - 4500/-</option>
            <option>4500 - 8000/-</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Company</option>
            <option>Toyota</option>
            <option>Maruti</option>
            <option>Tata</option>
            <option>Kia</option>
        </select>
        </div>
    </div>
  )
}

export default CarCatalog