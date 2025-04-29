import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export function LoginForm({
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="text-muted-foreground text-balance">
                  Login to Dormlife Account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="id@student.chula.ac.th" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  
                </div>
                <Input id="password" type="password" required />
                <a href="#" className="ml-auto text-secondary-red text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                  
                <div className="pt-2">
                <RadioGroup defaultValue="option-one" className="flex space-x-4">
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                <Label className="thai-text" htmlFor="option-one">นิสิตหอพัก</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label className="thai-text" htmlFor="option-two">บุคลากรหอพัก</Label>
                </div>
                </RadioGroup>

                </div>

              </div>
                <div>
                <Link href="/dashboard">
                <Button>Login</Button>
                </Link>
                </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/cmadong_pic.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
