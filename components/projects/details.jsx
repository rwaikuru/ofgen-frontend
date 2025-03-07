"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export default function ProjectDetails() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 max-w-lg bg-white shadow-md mt-10 rounded-lg">
      {/* Progress Bar */}
      <Progress value={progress} className="w-[60%] mb-4" />

      {/* Project Details */}
      <div className="text-gray-800 space-y-2 ">
        <p><strong>Project Name:</strong> Solar Farm A</p>
        <p><strong>Site ID:</strong> RV_NO1029</p>
        <p><strong>Region:</strong> Rift Valley</p>
        <p><strong>Project Manager:</strong> John Doe</p>
        <p><strong>Start Date:</strong> 2023-10-01</p>
        <p><strong>End Date:</strong> 2024-03-31</p>
        <p><strong>Status:</strong> In Progress</p>
        <p><strong>Priority:</strong> High</p>
      </div>
    </div>
  );
}
