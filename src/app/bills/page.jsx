import { Card, CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
  } from "@/components/ui/sidebar"
  
  

export default function Bills() {
    return(
    <div>
    <Card>
        <CardHeader>
            <CardTitle>Billing Details</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card> 
    </div>
    );
}