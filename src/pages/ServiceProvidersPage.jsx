import React from 'react'
import ServiceProviders from '../components/ServiceProviders'
import NavBar from '../components/NavBar'

function ServiceProvidersPage() {
  return (
    <div className='w-screen h-screen hidden sm:block'>
              <NavBar />
        <ServiceProviders />
    </div>
  )
} 

export default ServiceProvidersPage