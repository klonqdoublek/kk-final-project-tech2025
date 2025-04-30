import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  IconCirclePlusFilled,
  IconDownload,
  IconEdit
} from "@tabler/icons-react"


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
import { SiteHeader } from "@/components/site-header"

// Add this data array before or inside your component
const billsData = [
  {
    date: "2023-10-01",
    time: "09:15 AM",
    status: "Pending",
    amount: "฿3,901.00",
    paymentMethod: "Credit Card"
  },
  {
    date: "2023-09-15",
    time: "02:30 PM",
    status: "Paid",
    amount: "฿3,901.00",
    paymentMethod: "Bank Transfer"
  },
  {
    date: "2023-08-20",
    time: "11:45 AM",
    status: "Paid",
    amount: "฿3,901.00",
    paymentMethod: "PayPal"
  },
  {
    date: "2023-07-05",
    time: "04:20 PM",
    status: "Paid",
    amount: "฿3,901.00",
    paymentMethod: "Credit Card"
  }
];

export default function Bills() {
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
        <div className="pl-4 pr-4 flex flex-1 flex-col gap-4"> {/** all Container **/}
          <h1 className="pt-4 pl-1 text-2xl font-semi-bold">Billing Details</h1>
          <div className="flex flex-row gap-2 "> {/** top Container - now flex-row for 2 columns **/}
            <div className="w-full md:w-[60%] rounded-xl border shadow-md"> {/** left Container **/}
              <div className="p-4 flex flex-col gap-2"> {/** left **/}
                <div className="p-4 flex bg-main-red w-full h-40 rounded-xl"> {/** main bills **/}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-row justify-between gap-2">
                      <h1 className="text-3xl text-white font-semi-bold">Upcoming:</h1>
                      <h1 className="text-3xl text-white font-semi-bold">3,500฿</h1>
                    </div>
                    <div>
                      <p className="text-xl text-white font-semi-bold">1 MAR 2025 6.00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
        {/** Room Fees **/}
        <div className="bg-secondary-red rounded-xl flex flex-col justify-between">
          <div className="p-4">
            <h3 className="text-xl text-white font-semi-bold">Room Fees</h3>
            <p className="text-white thai-text text-sm">ค่าห้อง</p>
          </div>
          <p className="p-4 text-2xl text-white">3,500฿</p>
        </div>
        
        {/** Electricity **/}
        <div className="bg-third-red rounded-xl flex flex-col justify-between">
          <div className="p-4">
            <h3 className="text-xl text-white font-semi-bold">Electricity</h3>
            <p className="text-white thai-text text-sm">ค่าไฟ</p>
          </div>
          <p className="p-4 text-2xl text-white">200฿</p>
        </div>
        
        {/** Water **/}
        <div className="bg-fourth-red rounded-xl flex flex-col justify-between">
          <div className="p-4">
            <h3 className="text-xl text-main-red font-semi-bold">Water</h3>
            <p className="text-main-red font-semi-bold thai-text text-sm">ค่าน้ำ</p>
          </div>
          <p className="p-4 text-2xl text-pink-600">100฿</p>
        </div>
        
        {/** Fine **/}
        <div className="bg-fifth-red rounded-xl flex flex-col justify-between">
          <div className="p-4">
            <h3 className="text-xl text-main-red font-semi-bold">Fine</h3>
            <p className="text-main-red thai-text text-sm">ค่าปรับ</p>
          </div>
          <p className="p-4 text-2xl text-main-red">0฿</p>
        </div>
      </div>
    </div>
    
    <div className="px-4 pb-4 flex flex-row-reverse justify-between items-center">
      <Button> <IconDownload/> Download Bills </Button>
      <p className="text-xs opacity-70">Latest Updated: 14 April 2025 16:30PM</p>
    </div>
  </div>

            <div className="w-full flex flex-col md:w-[40%] bg-white rounded-xl flex-col gap-2"> {/** right Container **/}
              <div className="p-4 h-72 border rounded-xl shadow-md"> {/** primary payment Container **/}
                <div className="flex flex-row justify-between"> 
                  <h3 className="text-xl pb-2"> Primary Payment </h3>
                  <Button variant="outline" size="icon">
                  <IconEdit />
                  </Button>
                </div>
                
                <div className= "flex flex-row gap-4 ">
                  <img className="rounded-xl object-fill" src="kasikorn.png" alt="kasikorn" width="80" height="60" />
                  <div className="flex flex-col">
                    <p> Kasikorn Bank </p>
                    <p> Pichaya P. </p>
                    <p> 601-1234-xxxx </p>
                  </div>
                </div>
                <p className="pt-4 text-sm opacity-70"> *Automatically Paid on 10th of the month 17:00PM </p>
              </div>
              <div className="flex flex-row h-full justify-between p-4 border rounded-xl shadow-md"> {/** secondary payment Container **/}
                <div> 
                  <h3 className="text-xl pb-2"> Secondary Payment </h3>
                  <p className="italic opacity-70"> You have not added yet </p>
                </div>
                <IconCirclePlusFilled color="gray" size={52}> </IconCirclePlusFilled>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col border rounded-md shadow-md" > {/** bottom Container - now flex-row for 2 columns **/}
            <h3 className="font-semi-bold"> Payment History </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billsData.map((bill, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{bill.date}</TableCell>
                    <TableCell>{bill.time}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                        bill.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {bill.status}
                      </span>
                    </TableCell>
                    <TableCell>{bill.amount}</TableCell>
                    <TableCell>{bill.paymentMethod}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
      </SidebarInset>
    </SidebarProvider>
  );
}
