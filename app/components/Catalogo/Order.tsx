"use client"

export function Order() {
  const handleNumberClick = (number: number) => {
    window.location.search = `/items?/_page=${number}/_limit=12`
  }
  return (
    <>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className="w-6 h-6 p-1 flex justify-center items-center bg-white-300 rounded-lg"
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </>
  )
}
