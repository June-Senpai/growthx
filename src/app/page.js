import Button from "@/components/Button"
import Navbar from "@/components/Navbar"
import "../components/Navbar.css"
import Companies from "@/components/Companies"

export default function Home() {
  return (
    <div className="main-box">
      <Navbar />
      <div className="flex justify-center text-6xl mt-32">
        <div className="main-text w-[500px] font-bold text-center">
          Become a top 1% growth leader
        </div>
      </div>
      <div className="flex items-center justify-center gap-12 mt-32">
        <Button />
        <button className=" hover:border-white p-2 rounded-lg border-2 border-transparent">
          Membership guide
        </button>
      </div>
      {/* <Companies /> */}
    </div>
  )
}
