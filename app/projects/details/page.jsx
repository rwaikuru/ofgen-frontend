import { columns } from "../../../components/tasks/columns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"
import Documentstable from "../documents/page"
import Financialstable from "../financial/page"
import Healthtable from "../health/page"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProjectDetails from "@/components/projects/details"
import Image from "next/image"


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
    <div className="">
      <Header/>
      {/* <h1 className="text-2xl font-bold mt-10">Projects Details</h1>
      <h1 className="text-xl mt-10 ">Project Tasks and Subtasks</h1>
      <DataTable columns={columns} data={data} />
      <Documentstable/>
      <Financialstable/>
      <Healthtable/> */}
      
      <div className="flex items-center w-full gap-8">
  {/* Project Details Section */}
  <div className="flex-1">
    <ProjectDetails />
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center">
    <Image 
      src="/solar.png" 
      alt="Solar Panel"
      className="w-full h-auto max-w-md object-cover"
      width={500} 
      height={300} 
    />
  </div>
</div>


      
    <Tabs defaultValue="tasks" className="mt-10">
      <TabsList className="grid w-full grid-cols-4 text-black ">
      <TabsTrigger value="tasks">Tasks & Subtasks</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="health">Health & Safety</TabsTrigger>
        <TabsTrigger value="financials">Project Financials</TabsTrigger>
      </TabsList>
      <TabsContent value="tasks">
        <Card>
          <CardHeader>
            <CardTitle>Projects Tasks and Subtasks</CardTitle>
            <CardDescription>
Projects Tasks and Subtasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <DataTable columns={columns} data={data} />
            </div>
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="documents">
        <Card>
          <CardHeader>
            <CardTitle>Projects Documents</CardTitle>
            <CardDescription>
              Projects Documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Documentstable/>
            </div>
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="health" >
        <Card>
          <CardHeader>
            <CardTitle>Health & Safety</CardTitle>
            <CardDescription>
             Projects Health & Safety details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
             <Healthtable/>
            </div>
          </CardContent>
          {/* <CardFooter>
            <Button>Save password</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="financials">
        <Card>
          <CardHeader>
            <CardTitle>Projects Financials</CardTitle>
            <CardDescription>
              Projects Financial details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Financialstable/>
            </div>
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  

    </div>
  )
}
