import { columns } from "../../components/sites/columns"
import { DataTable } from "../../components/ui/data-table"
import Header from "@/components/header"
import AddSite from '@/components/sites/addsite'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import  Stats  from "@/components/sites/stats"



async function getData() {
  return [
    {
        id:"RV_NO1029",
        name:"Longonot Farm",
        region:"Rift Valley",
          siteType:"Green Field",
          cordinates:"0.0000,0.0000",
             status:"Active",
       },
       {
        id:"RV_NO2099",
        name:"Nairobi Hub",
        region:"Rift Valley",
          siteType:"Green Field",
          cordinates:"0.0000,0.0000",
             status:"Active",
       },
       {
        id:"RV_NO3986",
        name:"Mombasa Site",
        region:"Rift Valley",
          siteType:"Green Field",
          cordinates:"0.0000,0.0000",
             status:"Active",
       },
       {
        id:"RV_NO8479",
        name:"Eldoret Farm",
        region:"Rift Valley",
          siteType:"Green Field",
          cordinates:"0.0000,0.0000",
             status:"Active",
       },
       {
        id:"RV_NO7462",
        name:"Longonot Farm",
        region:"Rift Valley",
          siteType:"Green Field",
          cordinates:"0.0000,0.0000",
             status:"Active",
       },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
    <Header />
    <div className="p-5 m-10 space-y-6">
      <div className="mb-6">
        <Stats />
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl mt-5  font-bold">All Sites</h1>
       
      </div>
      <div className="align-right flex justify-end"> 
      <Button asChild>
          <Link href="/sites/addsite">Add Site</Link>
        </Button>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  </div>
  )
}
