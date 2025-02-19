import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const columns = [
  {
    accessorKey: "projectName",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Project Name <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
    ),
    cell: ({ row }) => <span className="text-green-600 font-medium">{row.getValue("projectName")}</span>
  },
  {
    accessorKey: "siteID",
    header: "Site ID",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
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
    cell: ({ row }) => <span>{row.getValue("progress")}%</span>
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => alert(`Viewing ${row.original.projectName}`)}>View</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert(`Editing ${row.original.projectName}`)}>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert(`Deleting ${row.original.projectName}`)}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
