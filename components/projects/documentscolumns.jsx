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
import { date } from "zod"

export const projects = [
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
    accessorKey: "name",
    header: "Document Name",
  },
  {
    accessorKey: "type",
    header: "Document Type",
  },
    
  {
    accessorKey: "uploadedby",
    header: "Uploaded By",
  },
  {
    accessorKey: "dateuploaded",
    header: "Date Uploaded",
  },
 
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original
      const router = useRouter()

    

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
         <DropdownMenuItem >
      View Project
    </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
