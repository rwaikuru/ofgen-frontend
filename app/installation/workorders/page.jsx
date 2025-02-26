import { columns } from "../../../components/sof/workordercolumns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"
import AddSite from '@/components/sites/addsite'
import React from 'react'



async function getData() {
  return [
    {
        number:"WO-100",
        id:"NV_RO0928",
        assignedTo:"John Doe",
        task:"Install Solar Panels",
        status:"In Progress",
        startDate:"12/12/2021",
        endDate:"12/12/2021",
       },
       {
        number:"WO-100",
        id:"NV_RO0928",
        assignedTo:"John Doe",
        task:"Install Solar Panels",
        status:"In Progress",
        startDate:"12/12/2021",
        endDate:"12/12/2021",
       },
       {
        number:"WO-100",
        id:"NV_RO0928",
        assignedTo:"John Doe",
        task:"Install Solar Panels",
        status:"In Progress",
        startDate:"12/12/2021",
        endDate:"12/12/2021",
       },    
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
      <Header/>
      <div className="p-5 m-10 "> 
                <div className='m-10'>
             </div>
      <h1 className="text-2xl font-bold">Work Orders</h1>
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}
