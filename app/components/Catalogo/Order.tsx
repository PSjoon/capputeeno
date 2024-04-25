import Arrow from "@/public/Arrow.svg"
import Image from "next/image"

export function Orders() {
  return (
    <>
      <nav className="flex flex-col ml-72 gap-6 my-8">
        <div className="flex gap-4">
          <p>Ordenar por</p>
          <Image src={Arrow} alt="" className="w-6 h-6" />
        </div>
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
      </nav>
    </>
  )
}
