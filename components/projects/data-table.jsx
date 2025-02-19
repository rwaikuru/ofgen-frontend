
// "use client"

// import { useState } from "react";
// import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
// import { columns } from "./columns";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export function DataTable({ data }) {
//   const [sorting, setSorting] = useState([]);
//   const [search, setSearch] = useState("");

//   const filteredData = data.filter(item => item.projectName.toLowerCase().includes(search.toLowerCase()));

//   const table = useReactTable({
//     data: filteredData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onSortingChange: setSorting,
//     state: { sorting },
//   });

//   return (
//     <div>
//       <Input placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} className="mb-4" />
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id} className="bg-gray-100">
//               {headerGroup.headers.map(header => (
//                 <th key={header.id} className="px-4 py-2 text-left border">{flexRender(header.column.columnDef.header, header.getContext())}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map(row => (
//             <tr key={row.id} className="border">
//               {row.getVisibleCells().map(cell => (
//                 <td key={cell.id} className="px-4 py-2 border">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between mt-4">
//         <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Previous</Button>
//         <span>Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</span>
//         <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</Button>
//       </div>
//     </div>
//   );
// }
