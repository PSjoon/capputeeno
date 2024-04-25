"use client"

import Bag from "@/public/shopping-bag.svg"
import Loupe from "@/public/search-loupe.svg"
import Image from "next/image"
import router from "next/router"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function Header() {
  const [showInput, setShowInput] = useState(false)
  const [searchBase, setSearchBase] = useState("")

  const router = useRouter()

  const clickshowInput = () => {
    setShowInput(!showInput)
  }

  const submitClick = () => {
    const currentURL = window.location.href
    const urlParams = new URL(currentURL)
    console.log(urlParams.pathname)

    if (urlParams.pathname == "/pesquisa") {
      window.location.search = `search=${searchBase}`
    } else {
      window.location.search = `/items?name_like=${searchBase}`
    }
  }

  useEffect(() => {
    const urlCompleta =
      typeof window !== "undefined" ? window.location.href : ""
    const regex = /\/items/
    const match = urlCompleta.match(regex)

    {
      !match ? (window.location.search = `/items?/_page=1/_limit=12`) : null
    }
  }, [])
  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 grid-flow-row h-16 bg-white-50 justify-center items-center">
      <Link
        href={"/"}
        className="font-Saira_Stencil_One hidden md:block text-3xl leading-relaxed ml-40"
        tabIndex={1}
        role="img logo"
        title="Logo"
      >
        capputeeno
      </Link>

      <div className="w-[22vw] h-10 mx-4 md:mx-0 my-2 grid grid-flow-row grid-cols-2 justify-center items-center md:ml-[16vw] md:gap-8">
        <div className="w-72 h-full bg-white-300 flex items-center justify-center rounded-lg p-2">
          <input
            type="text"
            name="search"
            className="w-full text-sm outline outline-0 transition-all focus:outline-0 focus:outline-none focus:ring-0 bg-white-300 rounded-lg"
            onChange={(event) => setSearchBase(event.target.value)}
            placeholder="Procurando por algo específico?"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.location.search = `/items?name_like=${searchBase}`
              }
            }}
          />

          <Image
            src={Loupe}
            alt=""
            onClick={submitClick}
            className="w-6 h-6 float-right rounded-lg bg-white-300 cursor-pointer"
          />
        </div>

        <div
          className="w-6 h-6 ml-[270px] lg:ml-40 md:ml-52"
          tabIndex={3}
          role="img bag"
        >
          <div className="flex">
            <Image src={Bag} alt="" className="relative" />

            <div className="w-5 h-5 flex absolute mt-4 ml-3 justify-center items-center bg-red-500 rounded-full">
              <p className="text-white-50 p-2">2</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
