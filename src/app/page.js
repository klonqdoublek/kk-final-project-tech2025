import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mb-16">
        <Image 
          src="/Dorm.life.svg" 
          alt="Dorm Life Logo"
          width={200}
          height={100}
          priority
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Welcome to Dormlife
        </h1>
        <h3 className="text-2xl p-2">
          by klonqdevblek
        </h3>
      </div>
      <div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  )
}
