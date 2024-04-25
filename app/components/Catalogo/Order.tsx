"use client"

import React, { useState, useEffect } from "react"

export function Order() {
  const [pageParam, setPageParam] = useState<number | null>(null)

  useEffect(() => {
    const urlCompleta =
      typeof window !== "undefined" ? window.location.href : ""
    const regex = /_page=(\d+)/
    const match = urlCompleta.match(regex)

    if (match) {
      const page = parseInt(match[1])

      setPageParam(page)
    }
  }, [])

  const handleNumberClick = (number: number) => {
    setPageParam(number)
    window.location.search = `/items?/_page=${number}/_limit=12`
  }

  return (
    <>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className={`w-6 h-6 p-1 text-gray-50 bg-white-400 flex justify-center items-center rounded-lg cursor-pointer ${
              pageParam === number ? "border border-orange-50" : "bg-white"
            }`}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </>
  )
}
