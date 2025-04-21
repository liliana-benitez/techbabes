import Link from "next/link"
import hero from "../public/hero.jpg"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div
        className="bg-cover bg-bottom h-[90vh] flex flex-col items-center justify-center gap-20"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundPosition: "50% 15%"
        }}
      >
        <h1 className="text-white text-5xl px-2 font-semibold text-center text-shadow-lg max-w-[70%] lg:text-6xl">
          Empowering Women in Tech, <br /> One Product at a Time
        </h1>
        {/* <h2 className="text-white px-10 font-semibold text-xl text-shadow-md text-center">
          Empowering Women in Tech, One Product at a Time
        </h2> */}
        <Link href="/what-we-do">
          <Button className="bg-[#F1D3DA] text-[#BD5F77] text-3xl font-light px-4 py-2 h-16 w-52">
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  )
}
