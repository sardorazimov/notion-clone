import { ChildProps } from "@/types"
import Navbar from "./components/Navbar"


const HomeLayout = ({
    children
}:ChildProps) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  )
}

export default HomeLayout
