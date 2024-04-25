"use client"

import { api } from "@/app/lib/api"
import { useState, useEffect } from "react"
import { Order } from "./Order"
import Image from "next/image"
import Arrow from "@/public/Arrow.svg"
import { AllItems } from "./AllItems"
import { Transition } from "@headlessui/react"

interface Item {
  id: number
  name: string
  description: string
  image_url: string
  category: string
  price: string
}

export function Menu() {
  const [items, setItems] = useState<Item[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("allItems")
  const [isVisible, setVisible] = useState(false)
  const [sortByPrice, setSortByPrice] = useState<string>("")

  const fetchItems = async () => {
    try {
      const response = await api.get("/items")
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleSortByPrice = (option: string) => {
    setSortByPrice(option)

    let sortedItems = [...items]
    if (option === "asc") {
      sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    } else if (option === "desc") {
      sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    }
    setItems(sortedItems)
  }

  const shuffleArray = (array: Item[]): Item[] => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

  const handleShuffle = () => {
    const shuffledItems = shuffleArray(items)
    setItems(shuffledItems)
  }
  const filteredItems =
    activeCategory === "allItems"
      ? items
      : items.filter((item) => item.category === activeCategory)

  return (
    <>
      <nav className="grid grid-cols-2">
        <nav className="flex gap-6 ml-40 my-8">
          <p onClick={() => setActiveCategory("allItems")}>TODOS OS PRODUTOS</p>
          <p onClick={() => setActiveCategory("t-shirts")}>CAMISETAS</p>
          <p onClick={() => setActiveCategory("mugs")}>CANECAS</p>
        </nav>
        <nav className="flex flex-col ml-72 gap-6 my-8">
          <div
            className="flex flex-col relative"
            onClick={() => setVisible(!isVisible)}
          >
            <div className="flex gap-4 ml-[15%]">
              <p>Ordenar por</p>
              <Image src={Arrow} alt="" className="w-6 h-6" />
            </div>
            <Transition
              show={isVisible}
              enter="transition-all ease-in-out duration-500 delay-[200ms]"
              enterFrom="opacity-0 translate-x-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="w-[50%] mt-2 flex flex-col items-center justify-center bg-white-50 p-2 rounded-[4px] text-gray-50">
                <div>
                  <option onClick={handleShuffle}>Novidades</option>
                  <option value="asc" onClick={() => handleSortByPrice("asc")}>
                    Preço: Menor - maior
                  </option>
                  <option
                    value="desc"
                    onClick={() => handleSortByPrice("desc")}
                  >
                    Preço: Maior - menor
                  </option>
                  <option onClick={handleShuffle}>Mais vendidos</option>
                </div>
              </div>
            </Transition>
          </div>
          <Order />
        </nav>
      </nav>
      <AllItems items={filteredItems} />
    </>
  )
}
