import { columns } from "../../../components/projects/documentscolumns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"

async function getData() {
  // Fetch data from your API here.
  return [
    
    {
        name: "Service Order Form",
        type: "SOF",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
    
      {
        name: "Word Order",
        type: "Word Order",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
      {
        name: "Safety Checklist",
        type: "SOF",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
      {
        name: "Service Order Form",
        type: "SOF",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
      {
        name: "Service Order Form",
        type: "SOF",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
      {
        name: "Service Order Form",
        type: "SOF",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
      {
        name: "Service Order Form",
        type: "SOF",
        uploadedby: "John Doe",
        dateuploaded: "2023-10-01",
      },
    
    
  ]
}

export default async function Documentstable() {
  const data = await getData()

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-xl mt-10 ">Projects Documents</h1>
      <DataTable columns={columns} data={data} />
      
    </div>
  )
}
