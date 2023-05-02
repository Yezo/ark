//Metadata
export const metadata = {
  title: "Table",
  description: "Work Sample designed and developed by Kevin Vo",
}

//Imports - Dynamic
import dynamic from "next/dynamic"
const PrimeTable = dynamic(() => import("@/components/DataTable/PrimeTable"))

export default function TablePage() {
  return (
    <main className="min-h-[calc(100vh-180px)]">
      <PrimeTable hideCategories={false} rowAmount={13} />
    </main>
  )
}
