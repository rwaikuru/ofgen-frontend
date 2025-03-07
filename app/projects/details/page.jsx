import { columns } from "../../../components/tasks/columns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"
import Documentstable from "../documents/page"
import Financialstable from "../financial/page"
import Healthtable from "../health/page"

async function getData() {
  // Fetch data from your API here.
  return [
    
    {
      id: "RV_N01029",
      name: "Solar Farm A",
      region: "Rift Valley",
      status: "inprogress",
      priority: "medium",
      progress: "75%",
      startdate: "2023-10-01",
      enddate: "2024-03-31",
    },
    {
      id: "CE_N02045",
      name: "Solar Farm B",
      region: "Central",
      status: "pending",
      priority: "high",
      progress: "0%",
      startdate: "2024-01-15",
      enddate: "2024-12-15",
    },
    {
      id: "RV_N01029",
      name: "Solar Farm C",
      region: "Rift Valley",
      status: "inprogress",
      priority: "medium",
      progress: "75%",
      startdate: "2023-10-01",
      enddate: "2024-03-31",
    },
    {
      id: "CE_N02045",
      name: "Solar Farm D",
      region: "Central",
      status: "pending",
      priority: "high",
      progress: "0%",
      startdate: "2024-01-15",
      enddate: "2024-12-15",
    },
    {
      id: "RV_N01029",
      name: "Solar Farm E",
      region: "Rift Valley",
      status: "inprogress",
      priority: "medium",
      progress: "75%",
      startdate: "2023-10-01",
      enddate: "2024-03-31",
    },
    {
      id: "CE_N02045",
      name: "Solar Farm F",
      region: "Central",
      status: "pending",
      priority: "high",
      progress: "0%",
      startdate: "2024-01-15",
      enddate: "2024-12-15",
    },
    {
      id: "RV_N01029",
      name: "Solar Farm G",
      region: "Rift Valley",
      status: "inprogress",
      priority: "medium",
      progress: "75%",
      startdate: "2023-10-01",
      enddate: "2024-03-31",
    },
    {
      id: "CE_N02045",
      name: "Solar Farm H",
      region: "Central",
      status: "pending",
      priority: "high",
      progress: "0%",
      startdate: "2024-01-15",
      enddate: "2024-12-15",
    },
     
    
  ]
}

export default async function Detailspage() {
  const data = await getData()

  return (
    <div className="container mx-auto p-10">
      <Header/>
      <h1 className="text-2xl font-bold mt-10">Projects Details</h1>
      <h1 className="text-xl mt-10 ">Project Tasks and Subtasks</h1>
      <DataTable columns={columns} data={data} />
      <Documentstable/>
      <Financialstable/>
      <Healthtable/>

    </div>
  )
}
