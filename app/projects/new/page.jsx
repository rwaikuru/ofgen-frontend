import React from 'react';
import StepOneForm from '@/components/projects/CreateProject';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Header from '@/components/header';

function Page() {
 return (
  <div>
    <Header/>
 <div className="m-10">
   <Card clasName="m-10">
     <CardHeader>
       <CardTitle className="text-2xl font-bold">Create New Project</CardTitle>
     </CardHeader>
     <CardContent>
       <StepOneForm />
     </CardContent>
   </Card>
   </div>
  </div>
 
 );
}

export default Page;
