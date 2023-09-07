import Image from 'next/image'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <div className=' py-3 px-5 md:px-12 flex items-center text-center justify-between'>
        <div>
            <Image src="/logo.png" alt='Logo' height={100} width={100} />
        </div>

        <div className=' hidden md:flex gap-16'>
            <h1 className=' hover:border-b-2 hover:shadow-md border-blue-500 cursor-pointer py-1 px-2 font-medium text-base rounded-lg'>Home</h1>
            <h1 className=' hover:border-b-2 hover:shadow-md border-blue-500 cursor-pointer py-1 px-2 font-medium text-base rounded-lg'>History</h1>
            <h1 className=' hover:border-b-2 hover:shadow-md border-blue-500 cursor-pointer py-1 px-2 font-medium text-base rounded-lg'>Contact Us</h1>
            <h1 className=' hover:border-b-2 hover:shadow-md border-blue-500 cursor-pointer py-1 px-2 font-medium text-base rounded-lg'>About</h1>
        </div>

        <div>
            <UserButton />
        </div>
    </div>
  )
}

export default NavBar