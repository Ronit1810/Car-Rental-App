import React from 'react'

const SearchInput = () => {
  return (
    <div className=' flex flex-col gap-2 items-center mb-20' >
        <h1 className=' text-xl text-gray-400 font-extrabold'>Let's Search What You Need...</h1>
        <div className=' flex justify-center items-center mb-2'>
            <div className=' flex items-center md:gap-3 bg-gray-500 px-2 md:px-12 md:py-2 rounded-3xl'>
                <div className=' flex  items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <input type='text' placeholder='Location' className=' text-black bg-transparent w-full p-2 outline-none' />

                </div>
                <div>
                    <input type='date' className=' bg-transparent text-black'/>
                    
                </div>
                
                
            </div>
            
        </div>
    </div>
  )
}

export default SearchInput