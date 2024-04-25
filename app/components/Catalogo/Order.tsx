"use client"

import Arrow from "@/public/Arrow.svg"
import { Transition } from "@headlessui/react"
import Image from "next/image"
import { useState } from "react"

export function Order() {
  const [isVisible, setVisible] = useState(false)

  const clickVisible = () => {
    setVisible(!isVisible)
  }

  return (
    <>
      <div className="flex gap-2 ">
        <p className="w-6 h-6 p-1 flex justify-center items-center bg-white-300 rounded-lg">
          1
        </p>
        <p className="w-6 h-6 p-1 flex justify-center items-center bg-white-300 rounded-lg">
          2
        </p>
        <p className="w-6 h-6 p-1 flex justify-center items-center bg-white-300 rounded-lg">
          3
        </p>
        <p className="w-6 h-6 p-1 flex justify-center items-center bg-white-300 rounded-lg">
          4
        </p>
        <p className="w-6 h-6 p-1 flex justify-center items-center bg-white-300 rounded-lg">
          5
        </p>
      </div>
    </>
  )
}
