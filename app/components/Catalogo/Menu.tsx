import { Orders } from "./Order"

export function Menu() {
  return (
    <nav className="grid grid-cols-2">
      <nav className="flex gap-6 ml-40 my-8">
        <p>TODOS OS PRODUTOS</p>
        <p>CAMISETAS</p>
        <p>CANECAS</p>
      </nav>
      <Orders />
    </nav>
  )
}
