import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
        <div className="flex flex-row gap-4 p-4">
          {/* Left container - Form */}
          <div className="w-1/2 p-4 border rounded-lg shadow-sm">
            <div className="p-4">
              <h1 className="text-3xl font-semi-bold">Maintenance Request</h1>
              <h1 className="text-xl">ระแบบแจ้งซ่อมออนไลน์</h1>
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <div className="flex flex-row"> 
                <Label className="text-red-500">ประเภทงานซ่อม</Label>
                <Label className="text-red-500">*</Label>
              </div>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="เลือกประเภทงานซ่อม..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">ไฟฟ้า</SelectItem>
                  <SelectItem value="dark">เฟอร์นิเจอร์</SelectItem>
                  <SelectItem value="system">ห้องน้ำ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <Label>เรื่อง</Label>
              <Input placeholder="เรื่อง..." required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <Label>รายละเอียด</Label>
              <Input placeholder="รายละเอียด..." required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
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
            <div className="p-4 grid gap-4 flex flex-row">
              <Label>เบอร์โทรศัพท์*</Label>
              <Input placeholder="063-456-xxxx" required />
            </div>
          </div>
          
          {/* Right container - Photo Upload */}
          <div className="w-1/2 p-4 border rounded-lg shadow-sm">
            <h3 className="p-4 font-semi-bold">อัปโหลดรูปภาพ (สูงสุด 5 ภาพ)</h3>
            <div className="flex items-center justify-center p-4">
              <img 
                className="rounded-xl" 
                src="landscape-placeholder-svgrepo-com.svg" 
                alt="upload picture here" 
                width="400" 
                height="500"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center p-4">
          <Button variant="default" size="lg">แจ้งซ่อม</Button>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
