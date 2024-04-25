import Image from "next/image"
import { Header } from "./components/Header/Header"
import { Corpo } from "./components/Catalogo/Corpo"
import { useEffect } from "react"

export default function Home() {
  return (
    <>
      <Header />
      <Corpo />
    </>
  )
}
