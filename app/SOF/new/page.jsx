import Header from '@/components/header'
import ServiceOrderForm from '@/components/sof/AddSOF'
import React from 'react'

function page() {
  return (
    <div>
    <Header/>
    <div className='m-10'>
<ServiceOrderForm/>
    </div>
    </div>

  )
}

export default page