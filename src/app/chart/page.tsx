import dynamic from "next/dynamic"

const LineChart = dynamic(() => import("@/components/LineChart/LineChart"))

export default function ChartPage() {
  return (
    <main className="min-h-[calc(100vh-180px)] flex flex-col gap-4 items-center justify-center">
      <LineChart />
    </main>
  )
}
