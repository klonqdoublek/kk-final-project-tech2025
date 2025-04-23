import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { IconBell, IconMail, IconCircleFilled } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"


export function SiteHeader() {
  return (
    <header
      className="flex h-(--header-height) bg-secondary-red shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        {/** <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" /> **/}
        {/**<h1 className="text-base font-medium">Documents</h1> **/}
        <Input className=" w-56 h-8 bg-white rounded-2xl" type="Search" placeholder="Search..." />
        <IconBell color="white"/>
        <IconMail color="white" />
        <div className="ml-auto flex flex-row items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="text-white">
              Pichaya P.
            </a>
          </Button>
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/Khaoklong_Pic.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
            
          </div>
          <Badge variant="outline" className="h-6 bg-green-50 text-green-700 hover:bg-green-100 rounded-xl">
                      Online
                    </Badge>
        </div>
      </div>
    </header>
  );
}
