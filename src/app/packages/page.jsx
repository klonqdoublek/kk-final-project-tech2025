
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"
import { NotReady } from "@/components/notready"

export default function Packages() {
    return (
      <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)"
        }
      }>
        <AppSidebar variant="inset" />
        <SidebarInset> 
        <SiteHeader></SiteHeader>
        <NotReady></NotReady>
        
      
        </SidebarInset>
        </SidebarProvider>
        )
        }
        