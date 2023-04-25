import dynamic from "next/dynamic"

const PrimeTable = dynamic(() => import("@/components/DataTable/PrimeTable"))

export default function TablePage() {
  return (
    <main>
      <PrimeTable hideCategories={false} rowAmount={25} />
    </main>
  )
}
