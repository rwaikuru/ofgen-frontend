import { columns } from "../../components/projects/columns"
import { DataTable } from "../../components/ui/data-table"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"
import Link from "next/link"


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
  <Header />
  <div className="p-5 m-10">
    <div className="flex justify-end mb-2">
      <Button asChild>
        <Link href="/projects/new">Create Project</Link>
      </Button>
    </div>
    <h1 className="text-2xl font-bold">Projects</h1>
    <DataTable columns={columns} data={data} />
  </div>
</div>

  )
}
