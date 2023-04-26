"use client"

// Imports - Libraries
import { useState } from "react"
import { useParse } from "@/hooks/useParse"

// Imports - Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { greenIcon, yellowIcon, redIcon, orangeIcon, lightGreenIcon } from "./Markers/Markers"
import "leaflet/dist/leaflet.css"
import "../app/globals.css"
import Dropdown from "@/components/Dropdown"
import DropdownContainer from "@/components/LineChart/DropdownContainer"
import DropdownTitle from "@/components/LineChart/DropdownTitle"

//Imports - Components

const Map = () => {
  // States
  const { data } = useParse(
    "https://docs.google.com/spreadsheets/d/11R-Ak5Edggygo4nXv9QjU32ATR75-UDKeyBsZlOx-fI/pub?output=csv"
  )
  const [decade, setDecade] = useState<string | null>("2030")

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
  return (
    <>
      <div className="flex items-center justify-between w-full max-w-[700px] bg-white text-dark p-4">
        <h2 className="font-bold text-2xl">Risk Factor - Map Markers</h2>
        <DropdownContainer>
          <DropdownTitle>Filter by decade</DropdownTitle>
          <Dropdown
            options={["2030", "2040", "2050", "2060", "2070"]}
            setter={setDecade}
            placeholder={decade}
            key="1"
          ></Dropdown>
        </DropdownContainer>
      </div>

      <MapContainer
        className="map z-0"
        center={[45.44868, -73.81668]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: "400px", minWidth: "350px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>

        {filteredData.map((item, index) => (
          <Marker
            position={{ lat: Number(item.Lat), lng: Number(item.Long) }}
            key={index}
            icon={handleRiskRatingMarkerColor(item["Risk Rating"])}
          >
            <Popup>
              <p className="flex flex-col gap-2 justify-center items-center">
                <span className="font-bold text-lg">{item["Asset Name"]}</span>
                <span className="font-semibold text-xs bg-black text-white py-2 px-2 rounded-md">
                  {item["Business Category"]}
                </span>
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default Map
