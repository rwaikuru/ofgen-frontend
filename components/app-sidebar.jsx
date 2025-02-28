"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "/user.png",
  },
  teams: [
    {
      name: "OFGEN ",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,

    },
    {
      title: "Projects",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All Projects",
          url: "/projects",
        },
        {
          title: "Create Project",
          url: "/projects/new",
        },
        {
          title: "Task Management",
          url: "/tasks/details",
        },
      ],
    },
    {
      title: "Sites",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "All Sites",
          url: "/sites",
        },
        {
          title: "Create Site",
          url: "/sites/addsite",
        },
        {
          title: "Site Management",
          url: "#",
        },
      ],
    },
    {
      title: "Inventory",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Equipment Catalog",
          url: "/equipments",
        },
        {
          title: "Procurement Status",
          url: "#",
        },
        {
          title: "Cost Tracking",
          url: "#",
        },
      ],
    },
    {
      title: "Orders & Installation",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Service Orders(SOF)",
          url: "/installation/SOF",
        },
        {
          title: "Work Orders",
          url: "/installation/workorders",
        },
        {
          title: "Installation Tracking",
          url: "#",
        },
      ],
    },
    {
      title: "Health & Safety",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Health",
          url: "#",
        },
      ],
    },
    {
      title: "Financials",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "View Financials",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "View Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Users & Roles ",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "View Users",
          url: "#",
        },
      ],
    },
    {
      title: "Documents",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "View Documents",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
 
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
