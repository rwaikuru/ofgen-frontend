import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function WorkOrderForm() {
  return (
    <Card className="max-w-5xl mx-auto p-6">
      <CardHeader>
        <CardTitle>Work Order</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <Label>Work Order Number *</Label>
              <Input placeholder="WO-0010" disabled />
            </div>
            <div>
              <Label>Site ID *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="site1">Site 1</SelectItem>
                  <SelectItem value="site2">Site 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Assigned To *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user1">User 1</SelectItem>
                  <SelectItem value="user2">User 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Task *</Label>
              <Textarea rows={3} />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <Label>Start Date *</Label>
              <Button variant="outline">Select Date ▼</Button>
            </div>
            <div>
              <Label>End Date *</Label>
              <Button variant="outline">Select Date ▼</Button>
            </div>
            <div>
              <Label>Status *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Description *</Label>
              <Textarea rows={3} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
