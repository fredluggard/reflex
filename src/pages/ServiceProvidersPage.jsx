import React from 'react'
import ServiceProviders from '../components/ServiceProviders'
import NavBar from '../components/NavBar'

function ServiceProvidersPage() {
  return (
    <div className='bg-mobile-bg md:bg:desktop-bg w-screen h-screen hidden md:block'>
        <div>
              <NavBar />
        </div>
        <ServiceProviders />
    </div>
  )
} 

export default ServiceProvidersPage