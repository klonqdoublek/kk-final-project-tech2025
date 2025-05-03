import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { IconTool, IconUpload } from "@tabler/icons-react"
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
import { SiteHeader } from "@/components/site-header"

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
      <SiteHeader> </SiteHeader>
        <div className="flex flex-col gap-4 p-4 md:flex-row">
          {/* Left container - Form */}
          <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-sm">
              <div className="p-4 bg-main-red rounded-t-lg ">
              <div className=" flex flex-row items-center gap-2">
                <IconTool color="white"> </IconTool>
                <h1 className="text-3xl text-white font-semi-bold">Maintenance Request</h1>
              </div>
                <h1 className="thai-text text-xl text-white font-medium pt-2">ระแบบแจ้งซ่อมออนไลน์</h1>
              </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <div className="flex flex-row"> 
                <Label className="thai-text">ประเภทงานซ่อม</Label>
                <Label className="text-red-500">*</Label>
              </div>
              <Select>
                <SelectTrigger className="w-[200px] thai-text">
                  <SelectValue className="thai-text" placeholder="เลือกประเภทงานซ่อม..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="thai-text" value="light">ไฟฟ้า</SelectItem>
                  <SelectItem className="thai-text" value="dark">เฟอร์นิเจอร์</SelectItem>
                  <SelectItem className="thai-text" value="system">ห้องน้ำ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <div className="flex flex-row"> 
                <Label className="thai-text">เรื่อง</Label>
                <Label className="text-red-500">*</Label>
              </div>
              
              <Input className="thai-text" placeholder="เรื่อง..." required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <div className="flex flex-row"> 
                <Label className="thai-text">รายละเอียด</Label>
                <Label className="text-red-500">*</Label>
              </div>
              <Input className="thai-text" placeholder="รายละเอียด..." required />
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <div className="flex flex-row"> 
                <Label className="thai-text">การนัดหมาย</Label>
                <Label className="text-red-500">*</Label>
              </div>
              
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label className="thai-text" htmlFor="option-one">ขึ้นซ่อมได้ตลอดเวลาช่วง 09.00-13.00 น.</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label className="thai-text" htmlFor="option-two">ขึ้นซ่อมได้ตลอดเวลาช่วง 13.00-16.00 น.</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="p-4 grid gap-4 flex flex-row">
              <div className="flex flex-row"> 
                <Label className="thai-text">เบอร์โทรศัพท์</Label>
                <Label className="text-red-500">*</Label>
              </div>
              <Input className="thai-text" placeholder="063-456-xxxx" required />
            </div>
          </div>
          
          {/* Right container - Photo Upload */}
          
          <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-sm">
            <h3 className="thai-text p-4 font-bold">อัปโหลดรูปภาพ (สูงสุด 5 ภาพ)</h3>
            <div className="flex flex-col items-center justify-center gap-6 p-4">
              <img 
                className="rounded-xl" 
                src="landscape-placeholder-svgrepo-com.svg" 
                alt="upload picture here" 
                width="350" 
                height="450"
              />
              <Button variant="secondary" className="thai-text"><IconUpload/> อัปโหลดรูปภาพ (ไม่จำเป็น) </Button>
            </div>
          </div>
        </div>
       
        
        <div className="flex flex-col items-center justify-center p-4">
          <Button className="thai-text" variant="default" size="lg">แจ้งซ่อม</Button>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
