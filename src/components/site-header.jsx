import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header
      className="flex h-(--header-height) bg-secondary-red shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        {/** <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" /> **/}
        {/**<h1 className="text-base font-medium">Documents</h1> **/}
        <Input type="Search" placeholder="Search..." />
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground">
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
        </div>
      </div>
    </header>
  );
}
