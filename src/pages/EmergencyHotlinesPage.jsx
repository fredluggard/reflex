import React from 'react'
import BackTick from '../components/BackTick'
import ServiceProviders from '../components/ServiceProviders'
import SearchBar from '../components/Search'

function EmergencyHotlinesPage() {
  return (
    <div className='bg-mobile-bg sm:bg-desktop-bg w-screen h-screen sm:hidden'>
        <div className='flex justify-center items-center w-full h-auto gap-x-4 mb-4 pt-12'>
            <BackTick />
            <h3 className='text-2xl font-normal text-gray-600 '>Emergency Hotlines</h3>
        </div>
        <div className=' mb-6'>
        <SearchBar />
        </div>
        <ServiceProviders />
    </div>
  )
} 

export default EmergencyHotlinesPage