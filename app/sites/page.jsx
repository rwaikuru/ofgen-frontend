import { columns } from "../../components/sites/columns"
import { DataTable } from "../../components/ui/data-table"
import Header from "@/components/header"
import AddSite from '@/components/sites/addsite'
import React from 'react'



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
      <Header/>
      <div className="p-5 m-10 "> 
                <div className='m-10'>
                <Button onclick  >Add Site </Button> 

             </div>
      <h1 className="text-2xl font-bold">Sites</h1>
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}
