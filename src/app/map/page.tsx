import dynamic from "next/dynamic"

const Map = dynamic(() => import("../../components/Map/Map"), {
  ssr: false,
})
const MapHeader = dynamic(() => import("@/components/Map/MapHeader"))
const MapCardContainer = dynamic(() => import("@/components/Map/MapCardContainer"))
const LineChart = dynamic(() => import("@/components/LineChart/LineChart"), {
  ssr: false,
})
export default function MapPage() {
  return (
    <main className="min-h-[calc(100vh-180px)]">
      <div className="flex flex-col min-w-full min-h-full xl:flex-row">
        <div className="basis-1/2 min-h-full">
          <div className="flex justify-evenly flex-col sm:flex-row">
            <MapHeader />
            <MapCardContainer />
          </div>

          <div className="rounded-lg p-4 bg-light-bg m-4 max-w-full min-h-[250px] ring-1 ring-black/20 shadow-sm place-items-center hidden sm:grid">
            <LineChart toggle={false} />
          </div>
        </div>
        <div className="basis-1/2 min-h-[725px]">
          <Map />
        </div>
      </div>
    </main>
  )
}
