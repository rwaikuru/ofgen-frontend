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
    header: "Site ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  
  {
    accessorKey: "region",
   header: "Region",
  },
  {
    accessorKey: "status",
   header: "Status",
  },

  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "progress",
    header: "Progress",
  },
  {
    accessorKey: "startdate",
    header:"Start Date",
  },
  {
    accessorKey: "enddate",
    header: "End Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original
      const router = useRouter()

    const handleViewProject = () => {
      // router.push(`/projects/details/${project.id}`) 
      router.push(`/projects/details/`) 

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
         <DropdownMenuItem onClick={handleViewProject}>
      View Project
    </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
