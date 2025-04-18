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

// Add this data array before or inside your component
const billsData = [
  {
    date: "2023-10-01",
    time: "09:15 AM",
    status: "Paid",
    amount: "$250.00",
    paymentMethod: "Credit Card"
  },
  {
    date: "2023-09-15",
    time: "02:30 PM",
    status: "Paid",
    amount: "$180.50",
    paymentMethod: "Bank Transfer"
  },
  {
    date: "2023-08-20",
    time: "11:45 AM",
    status: "Pending",
    amount: "$320.75",
    paymentMethod: "PayPal"
  },
  {
    date: "2023-07-05",
    time: "04:20 PM",
    status: "Paid",
    amount: "$195.25",
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
        <div className="pl-4 flex flex-1 flex-col gap-4"> {/** all Container **/}
          <h1 className="p-4 text-3xl font-semi-bold">Billing Details</h1>
          <div className="flex flex-row gap-4 "> {/** top Container - now flex-row for 2 columns **/}
            <div className="w-1/2 rounded-xl border shadow-md"> {/** left Container **/}
              <div className="p-4 flex flex-col gap-2"> {/** left **/}
                <div className="p-4 flex bg-main-red w-full h-40 rounded-xl"> {/** main bills **/}
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2">
                      <h1 className="text-3xl text-white font-semi-bold">Upcoming:</h1>
                      <p className="text-xl text-white font-semi-bold">3,500฿</p>
                    </div>
                    <div>
                      <p className="text-xl text-white font-semi-bold">1 MAR 2025 6.00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2"> {/** secondary bills **/}
                  <div className="p-4 flex w-40 h-35 bg-secondary-red rounded-xl">
                    <h3 className="text-white font-semi-bold">Room Fees</h3>
                    <p>ค่าห้องพัก</p>
                  </div>
                  <div className="p-4 flex w-40 bg-third-red rounded-xl">Electricity</div>
                  <div className="p-4 flex w-40 bg-fourth-red rounded-xl">Water</div>
                  <div className="p-4 flex w-40 bg-fifth-red rounded-xl">Fine</div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-white rounded-xl flex-col gap-4"> {/** right Container **/}
              <div className="p-4 border rounded-xl shadow-md"> {/** primary payment Container **/}
                <h3> Primary Payment </h3>
                <div className= "flex flex-row gap-4 ">
                  <img className="rounded-xl" src="kasikorn.png" alt="kasikorn" width="60" height="60" />
                  <div className="flex flex-col">
                    <p> Kasikorn Bank </p>
                    <p> Pichaya P. </p>
                    <p> 601-1234-xxxx </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-xl shadow-md"> {/** secondary payment Container **/}
                <h3> Secondary Payment </h3>
                You have not added yet
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
