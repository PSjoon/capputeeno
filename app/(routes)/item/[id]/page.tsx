"use client"

import { Header } from "@/app/components/Header/Header"
import { useParams } from "next/navigation"

export default function Items() {
  const { id } = useParams()
  console.log(id)

  return (
    <>
      <Header />
    </>
  )
}
