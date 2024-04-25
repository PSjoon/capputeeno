"use client"

import { api } from "@/app/lib/api"
import { useState, useEffect } from "react"
import { Orders } from "./Order"
import Image from "next/image"

import { AllItems } from "./AllItems"

interface Items {
  id: number
  name: string
  description: string
  image_url: string
  category: string
  price: number
}

export function Menu() {
  const [items, setItems] = useState<Items[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("allItems")

  const showArticle = async () => {
    try {
      const response = await api.get("/items")
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showArticle()
  }, [])

  const filteredItems =
    activeCategory === "allItems"
      ? items
      : items.filter((item) => item.category === activeCategory)

  return (
    <>
      <nav className="grid grid-cols-2">
        <nav className="flex gap-6 ml-40 my-8">
          <p onClick={() => setActiveCategory("allItems")}>
            TODOS OS PRODUTOS
            {activeCategory === "allItems" ? (
              <div className="w-full h-1 bg-orange-50 flex flex-col"></div>
            ) : null}
          </p>
          <p onClick={() => setActiveCategory("t-shirts")}>
            CAMISETAS
            {activeCategory === "t-shirts" ? (
              <div className="w-full h-1 bg-orange-50 flex flex-col"></div>
            ) : null}
          </p>
          <p onClick={() => setActiveCategory("mugs")}>
            CANECAS
            {activeCategory === "mugs" ? (
              <div className="w-full h-1 bg-orange-50 flex flex-col transition-all ease-in-out"></div>
            ) : null}
          </p>
        </nav>
        <Orders />
      </nav>

      <AllItems items={filteredItems} />
    </>
  )
}
