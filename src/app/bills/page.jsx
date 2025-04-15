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
        <div className="flex flex-1 flex-col"> {/** all Container **/}
        <h1 className="p-4 text-3xl font-semi-bold">Billing Details</h1>
          <div className="flex flex-row"> {/** top Container - now flex-row for 2 columns **/}
            <div className="w-1/2"> {/** left Container **/}
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
            <div className="w-1/2 bg-white rounded-xl"> {/** right Container **/}
              <div className="p-4 border rounded-xl"> {/** primary payment Container **/}
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
              <div className="p-4 border rounded-xl"> {/** secondary payment Container **/}
                <h3> Secondary Payment </h3>
                You have not added yet
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col " > {/** bottom Container - now flex-row for 2 columns **/}
            <h3 className="font-semi-bold"> Payment History </h3>
            <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Payment Method</TableHead>
              </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                </TableBody>
                </Table>
          </div>
        </div>
        
      </SidebarInset>
    </SidebarProvider>
  );
}
