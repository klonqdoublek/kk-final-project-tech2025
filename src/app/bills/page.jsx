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
  IconSun,
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
  IconCirclePlusFilled
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
          <h1 className="pt-4 text-3xl font-semi-bold">Billing Details</h1>
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
                <div className="flex flex-row contents gap-2"> {/** secondary bills **/}
                  <div className="grid grid-flow-col grid-rows-1 gap-2"> {/** details **/}
                    <div className="flex flex-col h-full w-42 bg-secondary-red justify-between rounded-xl">
                      <div className="p-4 flex flex-col">
                        <h3 className="text-2xl text-white font-semi-bold">Room Fees</h3>
                        <p className="text-white thai-text">ค่าห้องพัก</p>
                      </div>
                        <p className="p-4 text-xl text-white">฿3,500</p>
                    </div>
                    <div className="flex flex-col h-full w-42 bg-third-red justify-between rounded-xl">
                      <div className="p-4 flex flex-col">
                        <h3 className="text-2xl text-white font-semi-bold">Electricity</h3>
                        <p className="text-white thai-text" >ค่าไฟ</p>
                      </div> 
                        <p className="p-4 text-xl text-white">฿200</p>
                    </div>
                    <div className="flex flex-col h-full w-42 bg-fourth-red justify-between rounded-xl">
                  <div className="p-4 flex flex-col">
                    <h3 className="text-2xl text-secondary-red font-semi-bold">Water</h3>
                    <p className="thai-text">ค่าน้ำ</p>
                  </div>
                    <p className="p-4 text-xl text-black">฿200</p>
                  </div>
                  <div className="flex flex-col h-full w-42 bg-fifth-red justify-between rounded-xl">
                  <div className="p-4 flex flex-col">
                    <h3 className="text-2xl text-third-red font-semi-bold">Fine</h3>
                    <p className="thai-text" >ค่าปรับ</p>
                  </div>
                  <p className="p-4 text-xl text-black">฿0</p>
                  </div>

                  </div>
                  
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:w-[40%] bg-white rounded-xl flex-col gap-2"> {/** right Container **/}
              <div className="p-4 h-72 border rounded-xl shadow-md"> {/** primary payment Container **/}
                <h3 className="text-xl pb-2"> Primary Payment </h3>
                <div className= "flex flex-row gap-4 ">
                  <img className="rounded-xl object-fill" src="kasikorn.png" alt="kasikorn" width="80" height="60" />
                  <div className="flex flex-col">
                    <p> Kasikorn Bank </p>
                    <p> Pichaya P. </p>
                    <p> 601-1234-xxxx </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row h-full justify-between p-4 border rounded-xl shadow-md"> {/** secondary payment Container **/}
                <div> 
                  <h3 className="text-xl pb-2"> Secondary Payment </h3>
                  <p> You have not added yet </p>
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
