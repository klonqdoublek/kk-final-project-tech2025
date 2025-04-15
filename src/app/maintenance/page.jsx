
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"




export default function Maintenance() {
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
        <div className= "p-4"> 
          <div className= "p-4">
          <h1 className= "text-2xl" > Maintenance Request </h1>
          <h1 className= "text-xl" > ระแบบแจ้งซ่อมออนไลน์ </h1>
          </div>
            <div className="p-4 grid gap-4 flex flex-row">
                <Label>ประเภทงานซ่อม</Label>
                <Input placeholder="ประเภทงานซ่อม" required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
                <Label>เรื่อง</Label>
                <Input placeholder="เรื่อง..." required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
                <Label>รายละเอียด</Label>
                <Input placeholder="รายละเอียด..." required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row"></div>
              <Label>การนัดหมาย*</Label>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">ขึ้นซ่อมได้ตลอดเวลาช่วง 09.00-13.00 น.</Label>
                </div>
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">ขึ้นซ่อมได้ตลอดเวลาช่วง 13.00-16.00 น.</Label>
                </div>
              </RadioGroup>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
               {/** <SectionCards /> **/}
               {/** <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} /> **/}
              
          </div>
          
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
