"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileDollar,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconMessage,
  IconPackage,
  IconPower,
  IconReport,
  IconSearch,
  IconSettings,
  IconTool,
  IconUser,
  IconUsers,
} from "@tabler/icons-react"


import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Link from "next/link"
import Image from 'next/image';

const data = {
  user: {
    name: "Khaoklong",
    email: "ipichaya.2004@gmail.com",
    avatar: "/Khaoklong_Pic.jpg",
  },
  navMain: [
    {
      title: "Personal Info",
      url: "/personal",
      icon: IconUser,
    },
    {
      title: "Bills",
      url: "/bills",
      icon: IconFileDollar,
    },
    {
      title: "Packages",
      url: "/packages",
      icon: IconPackage,
    },
    {
      title: "Chatroom",
      url: "/chatroom",
      icon: IconMessage,
    },
    {
      title: "Maintenance Request",
      url: "/maintenance",
      icon: IconTool,
    },
  ],
  
  
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Logout",
      url: "/login",
      icon: IconPower,
    },

  ],

  
}

export function AppSidebar({
  ...props
}) {
  return (
    
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem >
            <div className="flex flex-col items-center border-b p-4">
            <Link href="/dashboard">
            <Image 
            src="/Dorm.life.svg"
            width={150}
            height={300}
            alt="Dorm Logo"
            className="cursor-pointer"
            />
            </Link>
              <p className="text-sm opacity-50"> by klonqdevblek </p>
              
            </div>
            
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
