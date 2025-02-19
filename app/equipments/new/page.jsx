import AddEquipment from '@/components/equipments/AddEquipment'
import Header from '@/components/header'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>
        <div className='m-10'>
            <AddEquipment/>
        </div>
    </div>
  )
}

export default page