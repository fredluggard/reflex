import React from 'react'
import BackTick from '../components/BackTick'
import ServiceProviders from '../components/ServiceProviders'
import SearchBar from '../components/Search'

function EmergencyHotlinesPage() {
  return (
    <div className='w-screen h-screen sm:hidden'>
        <div className='flex justify-center items-center w-full h-auto gap-x-4 mb-4 mt-16 '>
            <BackTick />
            <h3 className='text-2xl font-normal text-gray-600 '>Emergency Hotlines</h3>
        </div>
        <SearchBar />
        <ServiceProviders />
    </div>
  )
} 

export default EmergencyHotlinesPage