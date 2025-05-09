
import Image from 'next/image';
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NotReady(){
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="mb-8">
        <Image 
          src="/under-02 1.svg" 
          alt="Dorm Life Logo"
          width={300}
          height={200}
          priority
        />
      </div>

      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">
          Sorry, This page is under construction
        </h1>
        <h3 className="text-2xl">
          We’re still in process... Please Wait!
        </h3>
      </div>
      <div>
        <Link href="/dashboard">
          <Button>Back to Home</Button>
        </Link>
      </div>
        </div>
        
    )

}