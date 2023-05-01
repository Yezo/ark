"use client"

// Imports - Libraries
import { useParse } from "@/hooks/useParse"

// Imports - Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { greenIcon, yellowIcon, redIcon, orangeIcon, lightGreenIcon } from "../Markers/Markers"
import "leaflet/dist/leaflet.css"
import "../../app/globals.css"

//Imports - Jotai
import { useAtom, useSetAtom } from "jotai"
import { categoryAtom, nameAtom, decadeAtom, dataAtom } from "@/atoms/globals"

//Imports - TypeScript
import { ISampleData } from "@/types/ISampleData"

const Map = () => {
  // States
  const [decade, setDecade] = useAtom(decadeAtom)
  const [obj, setObj] = useAtom(dataAtom)
  const setCategory = useSetAtom(categoryAtom)
  const setName = useSetAtom(nameAtom)
  const { data } = useParse(
    "https://docs.google.com/spreadsheets/d/11R-Ak5Edggygo4nXv9QjU32ATR75-UDKeyBsZlOx-fI/pub?output=csv"
  )

  //Utility functions
  const filteredData = data.filter(({ Year }) => Year === decade)

  const handleRiskRatingMarkerColor = (riskRating: string) => {
    const rating = Number(riskRating)
    if (rating >= 0 && rating < 0.2) return greenIcon
    if (rating >= 0.2 && rating < 0.4) return lightGreenIcon
    if (rating >= 0.4 && rating < 0.6) return yellowIcon
    if (rating >= 0.6 && rating < 0.8) return orangeIcon
    if (rating >= 0.8 && rating <= 1) return redIcon
    else return
  }

  const handleClick = (item: ISampleData) => {
    setName(item["Asset Name"])
    setCategory(item["Business Category"])
    setObj(item)
  }

  return (
    <MapContainer
      className="map z-0"
      center={[45.44868, -73.81668]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ minHeight: "761px", minWidth: "350px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>

      {filteredData.map((item, index) => (
        <Marker
          position={{ lat: Number(item.Lat), lng: Number(item.Long) }}
          icon={handleRiskRatingMarkerColor(item["Risk Rating"])}
          key={index}
          eventHandlers={{
            click: () => {
              handleClick(item)
            },
          }}
        >
          <Popup>
            <p className="flex flex-col gap-2 justify-center items-center">
              <span className="font-bold text-lg">{item["Asset Name"]}</span>
              <span className="font-semibold text-xs bg-dark-bg text-light-text py-2 px-2 rounded-md">
                {item["Business Category"]}
              </span>
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
