import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { IconBell, IconMail,} from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"


export function SiteHeader() {
  return (
    <header
      className="flex h-[65px] rounded-sm bg-secondary-red shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        {/** <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" /> **/}
        {/**<h1 className="text-base font-medium">Documents</h1> **/}
        <Input className=" w-72 h-8 bg-white rounded-2xl" type="Search" placeholder="Search..." />
        <IconBell color="white"/>
        <IconMail color="white" />
        <div className="ml-auto flex flex-col place-items-start">
        <p className="text-white text-sm font-medium"> Pichaya Phulphean </p>
        <div className="flex flex-row items-center gap-2"> 
        <Badge variant="outline" className="h-6 bg-green-50 text-green-700 hover:bg-green-100 rounded-xl">
             Online
          </Badge>
          <div className="flex flex-col"> 
            <p className="text-white text-[12px] opacity-50"> Last Updated: </p>
            <p className="text-white text-[12px] mt-[-4] opacity-50"> 30 APR 2025 </p>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
