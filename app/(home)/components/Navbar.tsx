"use client"
import { ModeToggle } from "@/config/mode/mode-toogle"
import Logo from "./Logo"
import { Button } from "@/components/ui/button"
import { useScrolled } from "@/hooks/useScrolled"
import { cn } from "@/lib/utils"


const Navbar = () => {
  const scrolled = useScrolled();
  console.log(scrolled)
  return (
    <div className={cn("z-50 bg-slate-900 fixed top-0 flex items-center w-full p-6 justify-between", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="flex items-center gap-x-2">
        <Button variant={"ghost"} className="bg-white text-black rounded">Login</Button>
        <Button variant={"link"} className="bg-green-600 rounded ">Get Notion Free Trital</Button>
        <ModeToggle  />
      </div>
    </div>
  )
}

export default Navbar
