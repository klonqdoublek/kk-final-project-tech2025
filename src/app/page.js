import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-linear-65 from-purple-500 to-secondary-red">
      <div className="flex flex-col items-center bg-white shadow-md rounded-xl pl-16 pr-16 pt-8 pb-8"> 
      <div className="mb-12 mt-12">
        <Image 
          src="/Dorm.life.svg" 
          alt="Dorm Life Logo"
          width={200}
          height={150}
        />
      </div>
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-medium">
          Welcome to Dormlife
        </h1>
        <h3 className="text-xl opacity-50">
          by klonqdevblek
        </h3>
      </div>
      <div>
        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      </div>
      </div>
    </div>
  )
}
