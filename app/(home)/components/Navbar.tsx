"use client"
import { ModeToggle } from "@/config/mode/mode-toogle"
import Logo from "./Logo"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/useScrolled"
import { cn } from "@/lib/utils"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import Link from "next/link"
import { Loader } from "@/config/loader/loader"


const Navbar = () => {
  const scrolled = useScrolled();
  const { isAuthenticated, isLoading } = useConvexAuth();

  console.log(scrolled)
  return (
    <div className={cn("z-50 bg-slate-900 fixed top-0 flex items-center w-full p-6 justify-between", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="flex items-center gap-x-2">
        {isLoading && <Loader size={'lg'}/>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant={"ghost"} className="bg-white text-black rounded">Login</Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button variant={"link"} className="bg-green-600 rounded ">Get Notion Free Trital</Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
           <Button variant={'ghost'} asChild size={'sm'}>
            <Link href={'/document'} className="z-30 "> Enter Space Notion Travel</Link>
           </Button>
           <UserButton afterSignOutUrl="/" />
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
