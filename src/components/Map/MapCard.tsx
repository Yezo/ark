import MapCardInfobox from "@/components/Map/MapCardInfobox"
import MapRiskInfobox from "@/components/Map/MapRiskInfobox"
import TitleH3 from "@/components/Typography/TitleH3"
import { ISampleData } from "@/types/ISampleData"

export default function MapCard({ data }: { data: ISampleData | null }) {
  return (
    <>
      {data ? (
        <div className="rounded-lg p-4 bg-light-bg m-4 min-w-[22rem] max-w-[22rem] min-h-[250px] ring-1 ring-black/20 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <TitleH3>{data["Asset Name"]}</TitleH3>
            <MapRiskInfobox data={data} />
          </div>
          <div className="flex flex-wrap gap-2">
            <MapCardInfobox>{`Category: ${data["Business Category"]}`}</MapCardInfobox>
            <MapCardInfobox>{`Year: ${data.Year}`}</MapCardInfobox>
            <MapCardInfobox>{`Risk Rating: ${data["Risk Rating"]}`}</MapCardInfobox>
            <MapCardInfobox>{`Lat: ${data.Lat}`}</MapCardInfobox>
            <MapCardInfobox>{`Long: ${data.Long}`}</MapCardInfobox>
          </div>
        </div>
      ) : (
        <div className="rounded-lg p-4 bg-light-bg m-4 min-w-[22rem] max-w-[22rem] min-h-[250px] ring-1 ring-black/20 shadow-sm grid place-items-center">
          <TitleH3>Select a map marker!</TitleH3>
        </div>
      )}
    </>
  )
}
