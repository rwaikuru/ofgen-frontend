import React from 'react';
import StepOneForm from '@/components/projects/CreateProject';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Header from '@/components/header';

function Page() {
 return (
  
  <div className="">
    <Header/>
   <Card clasName="m-5">
     <CardHeader>
       <CardTitle className="text-2xl font-bold">Create New Project</CardTitle>
     </CardHeader>
     <CardContent>
       <StepOneForm />
     </CardContent>
   </Card>
   </div>
 );
}

export default Page;
