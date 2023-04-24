import PrimeTable from "@/components/DataTable/PrimeTable"
import React from "react"

export default function page() {
  return (
    <main>
      <PrimeTable hideCategories={false} rowAmount={25} />
    </main>
  )
}
