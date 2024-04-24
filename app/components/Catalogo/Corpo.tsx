"use client"

import { api } from "@/app/lib/api"
import { useState, useEffect } from "react"
import Image from "next/image"

interface Items {
  id: number
  name: string
  description: string
  image_url: string
  category: string
  price: number
}

export function Corpo() {
  const [items, setItems] = useState<Items[]>([])

  const showArticle = async () => {
    try {
      const response = await api.get("/items")

      console.log(response.data)
      setItems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showArticle()
  }, [])
  return (
    <main className="grid grid-cols-4 mx-36 place-items-center">
      {items.map((items) => {
        return (
          <article key={items.id}>
            <section className="flex flex-col justify-center bg-white-100 m-4 rounded-b-[4px]">
              <div className="">
                <Image
                  src={items.image_url}
                  alt=""
                  width={500}
                  height={500}
                  className="rounded-t-lg"
                ></Image>
              </div>

              <div className="">
                <p>{items.name}</p>
                <div className="border-b border-white-900"></div>
                <p>{items.price}</p>
              </div>
            </section>
          </article>
        )
      })}
    </main>
  )
}
