import { columns } from "../../../components/tasks/columns"
import { DataTable } from "../../../components/ui/data-table"


async function getData() {

  return [ 

    {
        name: "Install Solar Panels",
        assignedTo: "John Doe",
        status: "In Progress",
        progress: "75%",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
      {
        name: "Connect Inverter",
        assignedTo: "Jane Smith",
        status: "Not Started",
        progress: "0%",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
      {
        name: "Connect Inverter",
        assignedTo: "Jane Smith",
        status: "Not Started",
        progress: "0%",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
      {
        name: "Install Solar Panels",
        assignedTo: "John Doe",
        status: "In Progress",
        progress: "75%",
        startDate: "2023-10-01",
        endDate: "2024-03-31",
      },
  ]
}

export default async function DemoPage() {
  const data = await getData()
 

  return (
    <div className="container mx-auto p-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
 
