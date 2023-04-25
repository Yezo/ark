import dynamic from "next/dynamic"

const LineChart = dynamic(() => import("@/components/LineChart/LineChart"))

export default function ChartPage() {
  return (
    <main>
      <LineChart></LineChart>
    </main>
  )
}
