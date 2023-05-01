"use client"
//Imports - Jotai
import { useAtom } from "jotai"
import { decadeAtom } from "@/atoms/globals"

//Imports - Dynamic
import dynamic from "next/dynamic"
const Dropdown = dynamic(() => import("@/components/Generics/Dropdown"))
const DropdownTitle = dynamic(() => import("@/components/LineChart/DropdownTitle"))
const DropdownContainer = dynamic(() => import("@/components/LineChart/DropdownContainer"))
const TitleH3 = dynamic(() => import("@/components/Typography/TitleH3"))

export default function MapHeader() {
  const [decade, setDecade] = useAtom(decadeAtom)
  return (
    <div className="rounded-lg p-4 bg-light-bg m-4 min-w-[22rem] max-w-[22rem] min-h-[250px] ring-1 ring-black/20 shadow-sm flex ">
      <div className="space-y-10">
        <TitleH3>Risk Rating - Map Markers</TitleH3>
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
    </div>
  )
}
