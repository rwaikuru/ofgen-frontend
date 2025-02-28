import { columns } from "../../../components/sof/columns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"



async function getData() {
  return [
    {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Solar Panels",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Batteries",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Inverters",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Solar Panels",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
    <Header/>
    <div className="p-5 m-10 "> 
              <div className='flex justify-end mb-2'>
              <Button asChild>
      <Link href="/installation/SOF/new">Add SOF</Link>
    </Button> 
           </div>
    <h1 className="text-2xl font-bold">Service Orders</h1>
    <DataTable columns={columns} data={data} />
  </div>
  </div>
  )
}
