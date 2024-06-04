'use client'

import { Button } from "@/components/ui/button"
import { Loader } from "@/config/loader/loader"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { ArrowRight, CornerDownRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



const Hero = () => {
    const {isAuthenticated,isLoading} = useConvexAuth()
    
  return (
   <>
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Write,plan,organize,play
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Turn ideas into action
        with Notion’s AI-powered workspace.
        </h3>
        {isLoading && 
         <div className="w-full flex justify-center items-center">
              <Loader/>
         </div>
      }
        {isAuthenticated && !isLoading && (
          <>
           <Button className="bg-white text-black rounded hover:text-white" asChild size={'sm'}>
            <Link href={'/document'}>
                   Space Notion <ArrowRight  />
            </Link>           
           </Button>
          </>
        )}
        {!isAuthenticated && !isLoading &&(
            <>
             <SignInButton mode={'modal'}>
                <Button className="bg-green-600 rounded ">
                <CornerDownRight />    Get Notion Free & Request Demo free trital 
                </Button>
             </SignInButton>
            </> 
        )}
        {/***
         *   <Button className="bg-blue-500 rounded">
            Request Demo
            <ArrowRight className="h-4 w-4 ml-2" />
        </Button> 
         */}
     
    </div>
    <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center">
            <div className="relative h-[400px] w-[400px] hidden md:block">
                <Image  src={"./men.svg"} fill alt="Hero"  className="object-cover dark:hidden"/>
                <Image  src={"./men-dark.svg"} fill alt="Hero"  className="object-cover hidden dark:block"/>
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero
