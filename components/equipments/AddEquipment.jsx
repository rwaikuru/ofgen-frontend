"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Schema Validation with Zod
const equipmentSchema = z.object({
  equipmentName: z.string().min(1, "Equipment Name is required"),
  modelNumber: z.string().min(1, "Model Number is required"),
  serialNumber: z.string().min(1, "Serial Number is required"),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
  unitCost: z.coerce.number().min(1, "Unit Cost must be greater than 0"),
  supplier: z.string().min(1, "Supplier is required"),
  status: z.string().min(1, "Status is required"),
  projectName: z.string().min(1, "Project Name is required"),
  description: z.string().optional(),
});

export default function AddEquipment() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(equipmentSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Card className="max-w-5xl mx-auto p-6">
      <CardHeader>
        <CardTitle>Add New Equipment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
          {/* Left Side Inputs */}
          <div className="space-y-4">
            <div>
              <Label>Equipment Name *</Label>
              <Input {...register("equipmentName")} placeholder="Enter equipment name" />
              {errors.equipmentName && <p className="text-red-500 text-sm">{errors.equipmentName.message}</p>}
            </div>
            <div>
              <Label>Model Number *</Label>
              <Input {...register("modelNumber")} placeholder="Enter model number" />
              {errors.modelNumber && <p className="text-red-500 text-sm">{errors.modelNumber.message}</p>}
            </div>
            <div>
              <Label>Serial Number *</Label>
              <Input {...register("serialNumber")} placeholder="Enter serial number" />
              {errors.serialNumber && <p className="text-red-500 text-sm">{errors.serialNumber.message}</p>}
            </div>
            <div>
              <Label>Quantity *</Label>
              <Input type="number" {...register("quantity")} placeholder="Enter quantity" />
              {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
            </div>
            <div>
              <Label>Unit Cost *</Label>
              <Input type="number" {...register("unitCost")} placeholder="Enter unit cost" />
              {errors.unitCost && <p className="text-red-500 text-sm">{errors.unitCost.message}</p>}
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="space-y-4">
            <div>
              <Label>Supplier *</Label>
              <Input {...register("supplier")} placeholder="Enter supplier name" />
              {errors.supplier && <p className="text-red-500 text-sm">{errors.supplier.message}</p>}
            </div>
            <div>
              <Label>Status *</Label>
              <Select onValueChange={(value) => setValue("status", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="in-use">In Use</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
            </div>
            <div>
              <Label>Project Name *</Label>
              <Select onValueChange={(value) => setValue("projectName", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project1">Project 1</SelectItem>
                  <SelectItem value="project2">Project 2</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectName && <p className="text-red-500 text-sm">{errors.projectName.message}</p>}
            </div>
            <div>
              <Label>Description *</Label>
              <Textarea {...register("description")} placeholder="Write here..." />
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-end space-x-4 mt-6">
            <Button type="button" variant="outline" className="border-red-500 text-red-500 hover:bg-red-100">
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
