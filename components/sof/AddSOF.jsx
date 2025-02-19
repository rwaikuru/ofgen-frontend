"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

// Schema Validation with Zod
const serviceOrderSchema = z.object({
  issuedBy: z.string().min(1, "Issued By is required"),
  physicalAddress: z.string().min(1, "Physical Address is required"),
  contactPerson: z.string().min(1, "Contact Person is required"),
  telephoneNumber: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  issuedTo: z.string().min(1, "Issued To is required"),
  serviceOrderDate: z.date({ required_error: "Service Order Date is required" }),
  sofNumber: z.string().min(1, "SOF Number is required"),
});

export default function ServiceOrderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(serviceOrderSchema),
    defaultValues: { serviceOrderDate: new Date() },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Card className="max-w-5xl mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-center text-lg font-bold">Service Order Form (SOF)</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Section 1: Contact Information */}
          <div className="border p-6 rounded-md space-y-4">
            <h2 className="text-blue-700 font-semibold">1. Contact Information</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Left Side */}
              <div className="space-y-4">
                <div>
                  <Label>Issued By *</Label>
                  <Select {...register("issuedBy")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SAFARICOM PLC">SAFARICOM PLC</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.issuedBy && <p className="text-red-500 text-sm">{errors.issuedBy.message}</p>}
                </div>
                <div>
                  <Label>Physical Address *</Label>
                  <Input {...register("physicalAddress")} placeholder="Enter address" />
                  {errors.physicalAddress && <p className="text-red-500 text-sm">{errors.physicalAddress.message}</p>}
                </div>
                <div>
                  <Label>Contact Person *</Label>
                  <Input {...register("contactPerson")} placeholder="Enter name" />
                  {errors.contactPerson && <p className="text-red-500 text-sm">{errors.contactPerson.message}</p>}
                </div>
                <div>
                  <Label>Telephone Number *</Label>
                  <Input {...register("telephoneNumber")} placeholder="Enter phone number" />
                  {errors.telephoneNumber && <p className="text-red-500 text-sm">{errors.telephoneNumber.message}</p>}
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input {...register("email")} placeholder="Enter email" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-4">
                <div>
                  <Label>Issued To *</Label>
                  <Input {...register("issuedTo")} placeholder="Enter company name" />
                  {errors.issuedTo && <p className="text-red-500 text-sm">{errors.issuedTo.message}</p>}
                </div>
                <div>
                  <Label>Service Order Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        {watch("serviceOrderDate") ? format(watch("serviceOrderDate"), "PPP") : "Select Date"}
                        <CalendarIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={watch("serviceOrderDate")}
                        onSelect={(date) => setValue("serviceOrderDate", date)}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.serviceOrderDate && <p className="text-red-500 text-sm">{errors.serviceOrderDate.message}</p>}
                </div>
                <div>
                  <Label>SOF Number *</Label>
                  <Input {...register("sofNumber")} placeholder="Enter SOF Number" />
                  {errors.sofNumber && <p className="text-red-500 text-sm">{errors.sofNumber.message}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">Save</Button>
            <Button variant="destructive">Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
