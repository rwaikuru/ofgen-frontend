import { columns } from "../../../components/tasks/columns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"
import TaskModal from '@/components/tasks/AddNew'
import React from 'react'


async function getData() {

  return [ 

    {
        name: "Install Solar Panels",
        assignedTo: "John Doe",
        status: "In Progress",
        progress: "75%",
        priority: "High",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
      {
        name: "Connect Inverter",
        assignedTo: "Jane Smith",
        status: "Not Started",
        progress: "0%",
        priority: "High",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
      {
        name: "Test System",
        assignedTo: "Jane Smith",
        status: "Not Started",
        progress: "0%",
        priority: "High",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
  ]
}

export default async function DemoPage() {
  const data = await getData()
 

  return (
    <div>
      
  <Header/>
  
    <div className="container mx-auto p-10">
       <div> <TaskModal/> </div>
      <DataTable  columns={columns} data={data} />
    </div>
    </div>
  );
}
 
