import Image from "next/image"

interface Items {
  id: number
  name: string
  description: string
  image_url: string
  category: string
  price: number
}

interface Props {
  items: Items[]
}

export function AllItems({ items }: Props) {
  return (
    <>
      <main className="grid grid-cols-4 mx-36 place-items-center">
        {items.map((items) => {
          return (
            <article key={items.id} className="">
              <section className=" flex flex-col justify-center bg-white-100 m-4 mt-6 rounded-b-[4px]">
                <div className="">
                  <Image
                    src={items.image_url}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-t-lg h-[265px] object-cover"
                  ></Image>
                </div>

                <div className="ml-4 my-2">
                  <p>{items.name}</p>
                  <div className="w-[90%] my-2 border-b border-white-900"></div>
                  <p className="font-semibold text-black">R$ {items.price}</p>
                </div>
              </section>
            </article>
          )
        })}
      </main>
    </>
  )
}
