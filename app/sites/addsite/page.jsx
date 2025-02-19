import Header from '@/components/header'
import AddSite from '@/components/sites/addsite'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>

        <div className='m-10'>
        <AddSite />

        </div>

    </div>
  )
}

export default page