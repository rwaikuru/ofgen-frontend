"use client"

import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export const projects = [

    {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Solar Panels",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Solar Panels",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Solar Panels",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       {
        number:"SP-100",
        id:"NV_RO0928",
        name:"Solar Panels",
        quantity:"100",
        status:"Ordered",
        orderDate:"12/12/2021",
        deliveryDate:"12/12/2021",
       },
       
]

export const columns = [
  
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "SOF ID",
  },
  {
    accessorKey: "number",
    header: "Equipment Number",
  },
  {
    accessorKey: "name",
    header: "Equipment Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },

  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "orderDate",
    header: "Order Date",
  },
  {
    accessorKey: "deliveryDate",
    header: "Delivery Date",
  },
  
 
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original
      const router = useRouter()

    const handleViewProject = () => {
      // router.push(`/projects/details/${project.id}`) 
    //   router.push(`/projects/details/`) 

    }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Copy Project ID
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
            {/* <DropdownMenuItem onClick={handleViewProject}>
      View Project
    </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
