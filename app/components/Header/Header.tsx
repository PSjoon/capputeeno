import Bag from "@/public/shopping-bag.svg"
import Loupe from "@/public/search-loupe.svg"
import Image from "next/image"
import router from "next/router"

// width: 352px;
// height: 42px;
// top: 19px;
// left: 871px;
// padding: 9px 16px 9px 16px;
// gap: 0px;
// border-radius: 8px 0px 0px 0px;
// opacity: 0px;

export function Header() {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 grid-flow-row h-16 bg-white-50 justify-center items-center">
      <div>
        <p
          className="font-Saira_Stencil_One hidden md:block text-3xl leading-relaxed ml-40"
          tabIndex={1}
          role="img logo"
          title="Logo"
        >
          capputeeno
        </p>
      </div>

      <div className="w-[22vw] h-10 mx-4 md:mx-0 my-2 grid grid-flow-row grid-cols-2 justify-center items-center md:ml-[16vw] md:gap-8">
        <div className="w-72 h-full bg-white-300 flex items-center justify-center rounded-lg p-2">
          <input
            type="text"
            name="search"
            className="w-full text-sm outline outline-0 transition-all focus:outline-0 focus:outline-none focus:ring-0 bg-white-300 rounded-lg"
            // onChange={(event) => setSearchBase(event.target.value)}
            placeholder="Procurando por algo específico?"
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     router.push(`/pesquisa?search=${searchBase}`)

            //     const currentURL = window.location.href
            //     const urlParams = new URL(currentURL)
            //     console.log(urlParams.pathname)
            //     if (urlParams.pathname == "/pesquisa") {
            //       window.location.reload()
            //     }
            //   }
            // }}
          />

          <Image
            src={Loupe}
            alt=""
            className="w-6 h-6 float-right rounded-lg bg-white-300"
          />
        </div>

        <div
          className="w-6 h-6 ml-[270px] lg:ml-40 md:ml-52"
          tabIndex={3}
          role="img bag"
        >
          <div className="flex">
            <Image src={Bag} alt="" className="relative" />

            <div className="w-5 h-5 flex absolute mt-4 ml-3 justify-center items-center bg-red-500 rounded-full">
              <p className="text-white-50 p-2">2</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
