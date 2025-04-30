"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconHome } from "@tabler/icons-react";

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  const pathname = usePathname()
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          
        <SidebarMenuItem className="flex items-center gap-2">
          <SidebarMenuButton
            asChild
            isActive={pathname === "/dashboard"}
            tooltip="Home">
            <Link href="/dashboard">
            <IconHome />
            <span>Home</span>
            </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === (item.href || item.url)}>
              <Link href={item.href || item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
