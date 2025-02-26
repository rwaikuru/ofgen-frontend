import { columns } from "../../../components/tasks/columns"
import { DataTable } from "../../../components/ui/data-table"

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
     
    
  ]
}

export default async function Detailspage() {
  const data = await getData()

  return (
    <div className="container mx-auto p-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
