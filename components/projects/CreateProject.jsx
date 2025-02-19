"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import cn from "../../lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"; 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon } from "lucide-react"


const FormSchema = z.object({
  projectName: z.string().min(2, { message: "Project name is required." }),
  projectManager: z.string().min(1, { message: "Project Manager is required." }),
  priority: z.string().min(1, { message: "Priority is required." }),
  siteId: z.string().min(1, { message: "Site ID is required." }),
});

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [equipmentList, setEquipmentList] = useState([]);
  const [date, setDate] = React.useState();
  const [tasks, setTasks] = useState([{ name: "", assignedTo: "", startDate: "", endDate: "", priority: "", description: "" }]);

  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectName: "",
      projectManager: "",
      priority: "",
      siteId: "",
    },
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const onSubmit = (data) => console.log("Form Data:", data);

  const addTask = () => setTasks([...tasks, { name: "", assignedTo: "", startDate: "", endDate: "", priority: "", description: "" }]);
  const removeTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const addEquipment = () => {
    setEquipmentList([...equipmentList, { catalog: "", quantity: "", supplier: "", cost: "" }]);
  };

  const removeEquipment = (index) => {
    setEquipmentList(equipmentList.filter((_, i) => i !== index));
  };


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">

        <div className="flex justify-between mb-4">
          {["Project Details", "Task Details", "HSE & Docs", "Review & Submit"].map((label, index) => (
            <div key={index} className={`px-4 py-2 rounded ${step === index + 1 ? "bg-green-500 text-white" : "bg-gray-200"}`}>
              {label}
            </div>
          ))}
        </div>

        <Progress value={(step / 4) * 100} className="mb-4" />

      
      {step === 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Details */}
              <Card>
  <CardHeader>
    <CardTitle>Project Details</CardTitle>
  </CardHeader>
  <CardContent className="grid gap-4">
    
    
    <FormField control={methods.control} name="projectName" render={({ field }) => (
      <FormItem>
        <FormLabel>Project Name</FormLabel>
        <FormControl><Input placeholder="Enter project name" {...field} /></FormControl>
        <FormMessage />
      </FormItem>
    )} />

    <FormField control={methods.control} name="projectManager" render={({ field }) => (
      <FormItem>
        <FormLabel>Project Manager</FormLabel>
        <FormControl><Input placeholder="Enter manager name" {...field} /></FormControl>
        <FormMessage />
      </FormItem>
    )} />

    
    <div className="grid grid-cols-2 gap-4">
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button
          variant={"outline"}
          className={cn("w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button> */}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>

   
    <FormField control={methods.control} name="priority" render={({ field }) => (
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )} />

    <FormField control={methods.control} name="description" render={({ field }) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <textarea className="w-full h-32 p-2 border rounded-md" placeholder="Enter project details..." {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
      
    )} />
    
  </CardContent>
</Card>

              {/* Site Details */}
              <Card>
                <CardHeader><CardTitle>Site Details</CardTitle></CardHeader>
                <CardContent className="grid gap-4">
                  <FormField control={methods.control} name="siteId" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site ID</FormLabel>
                      <FormControl><Input placeholder="Enter site ID" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormItem>
        <FormLabel>Site Type</FormLabel>
        <FormControl>
          <Select onValueChange={methods.setValue} defaultValue={methods.getValues("siteType")}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type A">type A</SelectItem>
              <SelectItem value="type B">type B</SelectItem>
              <SelectItem value="type C">type C</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
      <FormItem>
        <FormLabel>Site Classification</FormLabel>
        <FormControl>
          <Select onValueChange={methods.setValue} defaultValue={methods.getValues("siteClassification")}>
            <SelectTrigger>
              <SelectValue placeholder="Select classification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="type A">class A</SelectItem>
              <SelectItem value="type B">class B </SelectItem>
              <SelectItem value="type C">class C </SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
      
                </CardContent>
              </Card>
            </div>
            {/* Equipment & Materials */}
            <Card>
              <CardHeader><CardTitle>Equipment and Materials</CardTitle></CardHeader>
              <CardContent>
                {equipmentList.map((equipment, index) => (
                  <div key={index} className="flex gap-4 mb-2">
                    <Input placeholder="Equipment Catalog" value={equipment.catalog} onChange={(e) => updateEquipment(index, "catalog", e.target.value)} />
                    <Input placeholder="Quantity" value={equipment.quantity} onChange={(e) => updateEquipment(index, "quantity", e.target.value)} />
                    <Input placeholder="Supplier" value={equipment.supplier} onChange={(e) => updateEquipment(index, "supplier", e.target.value)} />
                    <Input placeholder="Cost" value={equipment.cost} onChange={(e) => updateEquipment(index, "cost", e.target.value)} />
                    <Button variant="destructive" onClick={() => removeEquipment(index)}>-</Button>
                  </div>
                ))}
                <Button className="mt-4" onClick={addEquipment}>Add +</Button>
              </CardContent>
            </Card>
            <div className="flex justify-between">
              <Button onClick={handleBack}>Previous</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </>
        )}

        {/* Step 2: Task Details */}
        {step === 2 && (
          <Card>
            <CardHeader><CardTitle>Task Details</CardTitle></CardHeader>
            <CardContent>
              {tasks.map((task, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-center mb-4">
                  <Input placeholder="Task Name" />
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Assigned To" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user1">User 1</SelectItem>
                      <SelectItem value="user2">User 2</SelectItem>
                    </SelectContent>
                  </Select>

    <FormField control={methods.control} name="priority" render={({ field }) => (
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )} />

    <FormField control={methods.control} name="description" render={({ field }) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <textarea className="w-full h-32 p-2 border rounded-md" placeholder="Enter task details..." {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
      
    )} />
    
                </div>
              ))}
              <Button onClick={addTask}>Add Task</Button>
            </CardContent>
          </Card>
        )}

      {/* Step 3: File Uploads */}
{step === 3 && (
  <div className="flex flex-col w-full space-y-6">
    <h2 className="text-2xl font-bold text-center">HSE & Documentation</h2>

    {/* Top Section: Priority & Incident Reporting */}
    <div className="grid grid-cols-2 gap-6">
      {/* Priority Dropdown */}
      <div className="w-full">
        <FormField control={methods.control} name="priority" render={({ field }) => (
          <FormItem>
            <FormLabel>Priority</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
      </div>

      {/* Incident Reporting Checkbox */}
      <div className="flex items-center space-x-4">
        <FormLabel className="text-lg font-semibold">Incident Reporting</FormLabel>
        <FormField control={methods.control} name="incidentReporting" render={({ field }) => (
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" value="yes" {...field} checked={field.value === "yes"} />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" value="no" {...field} checked={field.value === "no"} />
              <span>No</span>
            </label>
          </div>
        )} />
      </div>
    </div>

    {/* Upload Cards - Smaller & Single Row */}
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Safety Checklist", name: "safetyChecklist" },
        { label: "Service Order Form (SOF)", name: "serviceOrderForm" },
        { label: "Work Orders", name: "workOrders" },
        { label: "Compliance Documents", name: "complianceDocuments" },
      ].map((file, index) => (
        <Card key={index} className="p-3 text-center space-y-3 border border-gray-300 w-full">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">{file.label} *</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-400 p-3 rounded-lg bg-gray-50 text-xs">
              <p className="text-gray-600">Drag & Drop or</p>
              <Button className="mt-1 bg-orange-500 hover:bg-orange-600 text-white text-xs px-2 py-1">
                Add File
              </Button>
            </div>
            <Button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1">
              Upload
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)}

        {/* Step 4: Review & Submit */}
        {step === 4 && (
          <Card>
            <CardHeader><CardTitle>Review & Submit</CardTitle></CardHeader>
            <CardContent>
              <p><strong>Project Name:</strong> {methods.getValues("projectName")}</p>
              <p><strong>Project Manager:</strong> {methods.getValues("projectManager")}</p>
              <p><strong>Priority:</strong> {methods.getValues("priority")}</p>
              <p><strong>Site ID:</strong> {methods.getValues("siteId")}</p>
              <Button type="submit" className="mt-4 bg-green-600 hover:bg-green-700 text-white">Submit</Button>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {step > 1 && <Button onClick={handleBack}>Previous</Button>}
          {step < 4 && <Button onClick={handleNext}>Next</Button>}
          {step === 4 && <Button type="submit">Submit</Button>}
        </div>

      </form>
    </FormProvider>
  );
};

export default StepForm;
