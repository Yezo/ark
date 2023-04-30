"use client"
//Imports - Jotai
import { useAtomValue } from "jotai"
import { dataAtom } from "@/atoms/globals"

//Imports- Dynamic
import dynamic from "next/dynamic"
const MapCard = dynamic(() => import("@/components/Map/MapCard"))

export default function MapCardContainer() {
  const data = useAtomValue(dataAtom)
  return (
    <>
      <MapCard data={data} />
    </>
  )
}
