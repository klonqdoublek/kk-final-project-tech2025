'use client'

import React from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  IconSun,
} from "@tabler/icons-react"


import { SiteHeader } from "@/components/site-header"

export default function Dashboard() {
  const [date, setDate] = React.useState(new Date());
  const carouselItems = [
    {
      id: 1,
      imageSrc: "Dorm247Event.jpg",
      imageAlt: "Main Dorm Event",
      title: "เปิดพื้นที่อ่านหนังสือ 24/7",
      size: "basis-1/2",
    },
    {
      id: 2,
      imageSrc: "avoid.jpg",
      imageAlt: "Campus Festival",
      title: "หลีกเลี่ยงพื้นที่ดังกล่าว 31 ม.ค.",
      size: "basis-1/2 ",
    },
    {
      id: 3,
      imageSrc: "dormclose2.jpg",
      imageAlt: "Graduation Ceremony",
      title: "Graduation Day",
      size: "basis-1/2",
    },
    {
      id: 4,
      imageSrc: "roomcleaning.jpg",
      imageAlt: "roomcleaning",
      title: "ตรวจ 5ส. หอพักประจำปี",
      size: "basis-1/2 ",
    },
    {
      id: 5,
      imageSrc: "confirmdorm.jpg",
      imageAlt: "confirmdorm",
      title: "กำหนดการยื่นอยู่หอพักต่อ",
      size: "basis-1/2 ",
    },
  ];
  
  

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)"
      }}>
      <AppSidebar variant="inset" />
      <SidebarInset>
      <SiteHeader> </SiteHeader>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - 60% width on larger screens */}
            <div className="w-full md:w-[60%] flex flex-col gap-6">
              {/* Welcome Card */}
              <Card className="shadow-md">
                <CardHeader className="">
                  <div className= "flex flex-row justify-between"> 
                    <div className= "flex flex-col "> 
                      <CardTitle className="text-4xl font-medium ">Morning, Pichaya</CardTitle>
                      <CardDescription className="text-lg mt-2 ">What would you like today?</CardDescription>
                    </div>
                    <IconSun color="#E87EA9" size={52}> </IconSun>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                
                  {/* Upcoming Events Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-red mb-2">Upcoming Events</h3>
                  
                    <Carousel className="w-full">
                      <CarouselContent>
                        {carouselItems.map((item) => (
                          <CarouselItem key={item.id} className={`${item.size} pl-4`}>
                            <div>
                              <Card className="overflow-hidden">
                                <div className=" h-[200px] relative overflow-hidden rounded-t-lg">
                                  <img 
                                    className="object-fill p-2 h-100% w-100% rounded-xl" 
                                    src={item.imageSrc} 
                                    alt={item.imageAlt}
                                  />
                                </div>
                                <CardContent className="p-2">
                                  <p className="text-lg thai-text font-medium pl-2 ">{item.title}</p>
                                  
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                          
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0" />
                      <CarouselNext className="right-0" />
                    </Carousel>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Menu Card */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-secondary-red">Your Latest Status</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {/* Status Section */}
                  <div className=" flex flex-row w-full justify-between items-center border pl-4 pb-2 pt-2 pr-4 rounded-xl shadow-md bg-main-red">
                    <div className="pb-2 pt-2"> 
                      <h2 className="thai-text font-bold text-white"> สถานะล่าสุด </h2>
                      <p className="text-xs text-white opacity-70">Latest Updated: 14 April 2025 16:30PM</p>
                    </div>
                    <Badge variant="outline" className="h-6 bg-green-50 text-green-700 hover:bg-green-100 thai-text rounded-xl">
                      ยื่นขออยู่หอต่อแล้ว
                    </Badge>
                  </div>
                  <div className=" flex flex-row w-full justify-center border pb-4 pt-4 pr-4 rounded-xl shadow-md ">
                    <div className="flex flex-col items-center border-r-2 pt-6 pl-4 pb-6 pr-6">
                      <h1 className="thai-text font-medium text-3xl"> 20 วัน</h1>
                      <h3 className="thai-text text-sm"> จำนวนวันอยู่หอของเดือนนี้ </h3>
                      <div className="flex flex-col p-1 items-center"> 
                      <p className="text-xs opacity-70">Latest Updated</p>
                      <p className="text-xs opacity-70">14 April 2025 16:30PM</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center border-r-2 pt-6 pl-4 pb-6 pr-6">
                      <h1 className="thai-text font-medium text-3xl"> 12ครั้ง </h1>
                      <h3 className="thai-text text-sm"> เข้าร่วมกิจกรรมหอ </h3>
                      <div className="flex flex-col p-1 items-center"> 
                      <p className="text-xs opacity-70">Latest Updated</p>
                      <p className="text-xs opacity-70">14 April 2025 16:30PM </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center pt-6 pl-6 pb-6">
                      <h1 className="thai-text font-medium text-3xl"> 20วัน</h1>
                      <h3 className="thai-text text-sm"> จำนวนวันอยู่หอของเดือนนี้ </h3>
                      <div className="flex flex-col p-1 items-center"> 
                      <p className="text-xs opacity-70">Latest Updated</p>
                      <p className="text-xs opacity-70">14 April 2025 16:30PM</p>
                      </div>
                    </div>

                  </div>
                  
                </CardContent> 
              </Card>
            </div>

            {/* Right Column - 40% width */}
            <div className="w-full md:w-[40%] flex flex-col gap-6">
              <Card className="shadow-md h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold">Calendar, Today 2025</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Calendar */}
                  <div className="flex justify-center mt-[-14]">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  
                  {/* News & Announcements - In same card below calendar */}
                  <div className="h-100 overflow-y-scroll">
                    <h3 className="text-lg font-semibold mb-3">News & Announcements</h3>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Card key={item} className="bg-fifth-red h-24 justify-center hover:bg-fourth-red cursor-pointer transition-colors">
                          <CardContent className="p-4 flex items-start justify-center">
                            <div className="w-2 h-16 bg-secondary-red rounded-full mr-3"></div>
                            <div>
                              <h4 className="font-medium">Dorm Announcement {item}</h4>
                              <p className="text-sm text-gray-600">Posted on May {item + 10}, 2025</p>
                              <p className="text-xs text-gray-600">Late-night snacks & chill in the courtyard — open till 1 AM!</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}