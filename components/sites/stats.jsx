import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Sites</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">50</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active vs Inactive</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-500 font-semibold">Active: 45</p>
          <p className="text-red-500 font-semibold">Inactive: 5</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regions Covered</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">5</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Site Types</CardTitle>
        </CardHeader>
        <CardContent>
          <p>1020</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
