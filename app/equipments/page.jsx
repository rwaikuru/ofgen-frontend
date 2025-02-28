import { columns } from "../../components/equipments/columns"
import { DataTable } from "../../components/ui/data-table"
import Header from "@/components/header"
import AddSite from '@/components/sites/addsite'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"



async function getData() {
  return [
    {
        number:"SP-100",
        name:"Solar Panels",
        quantity:"100",
          unitCost:"KES 30,000",
             status:"Ordered",
             supplier: "ABC Suppliers",
             totalCost:"KES 3,000,000",
       },
       {
        number:"SP-100",
        name:"Solar Panels",
        quantity:"100",
          unitCost:"KES 30,000",
             status:"Ordered",
             supplier: "ABC Suppliers",
             totalCost:"KES 3,000,000",
       },
       {
        number:"SP-100",
        name:"Batteries",
        quantity:"100",
          unitCost:"KES 30,000",
             status:"Ordered",
             supplier: "ABC Suppliers",
             totalCost:"KES 3,000,000",
       },
       {
        number:"SP-100",
        name:"Inverters",
        quantity:"100",
          unitCost:"KES 30,000",
             status:"Ordered",
             supplier: "ABC Suppliers",
             totalCost:"KES 3,000,000",
       },
       {
        number:"SP-100",
        name:"Solar",
        quantity:"100",
          unitCost:"KES 30,000",
             status:"Ordered",
             supplier: "ABC Suppliers",
             totalCost:"KES 3,000,000",
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
        <Link href="/equipments/new">Add Equipment</Link>
      </Button> 
             </div>
      <h1 className="text-2xl font-bold">Equipment Catalog</h1>
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}
