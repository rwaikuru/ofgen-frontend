import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "5rem",
      }}
    >
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardProvider;
