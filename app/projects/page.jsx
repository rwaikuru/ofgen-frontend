import { columns } from "../../components/projects/columns"
import { DataTable } from "../../components/ui/data-table"
import Header from "@/components/header"


async function getData() {
  return [
    
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
        
      },
      {
        id: "RV_N01029",
        name: "solar farm A",
        region:"rift valley",
        status:"inprogress",
        priority:"medium",
        progress:"75%",
        startdate:"2023-10-01",
        enddate:"2024-03-31",
      },
    
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div>
      <Header/>
      <div className="p-5 m-10 ">
      <h1 className="text-2xl font-bold">Projects</h1>
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}
