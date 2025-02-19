"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AddSite() {
  const [region, setRegion] = useState("");
  const [siteType, setSiteType] = useState("");
  const [status, setStatus] = useState("");
  const [projectName, setProjectName] = useState("");
  const [siteManager, setSiteManager] = useState("");

  return (
    <Card className="max-w-5xl mx-auto p-6">
      <CardHeader className="flex items-start font-bold text-3xl justify-between">
        Add Site
        {/* <CardTitle>Add a new Site</CardTitle> */}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Side Inputs */}
          <div className="space-y-4">
            <div>
              <Label>Site ID *</Label>
              <Input placeholder="Enter site ID" />
            </div>
            <div>
              <Label>Site Name *</Label>
              <Input placeholder="Enter site name" />
            </div>
            <div>
              <Label>Region *</Label>
              <Select onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">North</SelectItem>
                  <SelectItem value="south">South</SelectItem>
                  <SelectItem value="east">East</SelectItem>
                  <SelectItem value="west">West</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Site Type *</Label>
              <Select onValueChange={setSiteType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label>Coordinates *</Label>
                <Input placeholder="Longitude" />
              </div>
              <div>
                <Label className="text-transparent">.</Label> {/* Spacer */}
                <Input placeholder="Latitude" />
              </div>
            </div>
            <div>
              <Label>Address *</Label>
              <Textarea placeholder="Write here..." />
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="space-y-4">
            <div>
              <Label>Status *</Label>
              <Select onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Project Name *</Label>
              <Select onValueChange={setProjectName}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="project1">Project 1</SelectItem>
                  <SelectItem value="project2">Project 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Site Manager *</Label>
              <Select onValueChange={setSiteManager}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager1">Manager 1</SelectItem>
                  <SelectItem value="manager2">Manager 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Description *</Label>
              <Textarea placeholder="Write here..." />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">
            Cancel
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
