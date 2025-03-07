import { columns } from "../../../components/projects/healthcolumns"
import { DataTable } from "../../../components/ui/data-table"
import Header from "@/components/header"

async function getData() {
  // Fetch data from your API here.
  return [
    
    {
        field: "Compliance Status",
       description: "Compliant",
      },
      {
        field: "Incident Reported",
       description: "2",
      },
      {
        field: "Last Inspection Date",
        description: "2023-10-01",
      },
      
  ]
}

export default async function Financialstable() {
  const data = await getData()

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-xl mt-10 ">Financials</h1>
      <DataTable columns={columns} data={data} />
      
    </div>
  )
}
