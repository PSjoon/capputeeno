import Image from "next/image"
import { Header } from "./components/Header/Header"
import { Corpo } from "./components/Catalogo/Corpo"

export default function Home() {
  return (
    <>
      <Header />
      <Corpo />
    </>
  )
}
