import React from 'react'
import ServiceProviders from '../components/ServiceProviders'
import NavBar from '../components/NavBar'

function ServiceProvidersPage() {
  return (
    <div className='bg-mobile-bg sm:bg:desktop-bg w-screen h-screen hidden sm:block'>
        <div>
              <NavBar />
        </div>
        <ServiceProviders />
    </div>
  )
} 

export default ServiceProvidersPage