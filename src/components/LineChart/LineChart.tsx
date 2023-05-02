"use client"

// Imports - Libraries
import { useParse } from "@/hooks/useParse"
import { useFlatten } from "@/hooks/useFlatten"
import dynamic from "next/dynamic"
import "../../app/globals.css"

//Imports - Typescript
import { ISampleDataFixed } from "../../types/ISampleData"

//Imports - ChartJS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

//Imports - Jotai
import { useAtom } from "jotai"
import { categoryAtom, nameAtom, locationAtom } from "@/atoms/globals"

const Dropdown = dynamic(() => import("@/components/Generics/Dropdown"))
const DropdownContainer = dynamic(() => import("@/components/LineChart/DropdownContainer"))
const DropdownTitle = dynamic(() => import("@/components/LineChart/DropdownTitle"))

const LineChart = ({ toggle }: { toggle: boolean }) => {
  //Chart.js
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  // States
  const [location, setLocation] = useAtom(locationAtom)
  const [category, setCategory] = useAtom(categoryAtom)
  const [name, setName] = useAtom(nameAtom)

  const { data } = useParse(
    "https://docs.google.com/spreadsheets/d/11R-Ak5Edggygo4nXv9QjU32ATR75-UDKeyBsZlOx-fI/pub?output=csv"
  )
  const { flattenedData: finalData } = useFlatten(data)

  const filterCheck = (item: ISampleDataFixed) => {
    //If "All" is selected for location, then return all
    if (name && category && location === "All") {
      return item["Asset Name"] === name && item["Business Category"] === category
    }
    //If "All" is not selected, then return ones that only match the selected location
    if (name && category && location !== "All") {
      return (
        item["Asset Name"] === name &&
        item["Business Category"] === category &&
        item["Lat"] === location
      )
    }
  }

  //Filters by year, gets all risk ratings, and returns the average for that given year
  const filteredData = finalData.filter(filterCheck)

  const handleAverageRiskRatingPerYear = (data: ISampleDataFixed[], year: string) => {
    //Filter all items by the given year
    const obj = data.filter((item) => item.Year === year)
    //Check to see if there is a valid data-point by the given year
    //Otherwise undefineds and NaNs will pop up
    if (obj && obj.length >= 1) {
      const listOfRiskRatings = obj.map((value: any) => value["Risk Rating"])
      const averageRiskRatingPerYear =
        listOfRiskRatings.reduce((a: string, b: string) => Number(a) + Number(b), 0) /
        listOfRiskRatings.length
      const dataPoint = { riskRating: averageRiskRatingPerYear, year: year }
      return dataPoint
    } else return
  }

  //TODO: DRY refactor this
  const averageRiskRatingIn2030 = handleAverageRiskRatingPerYear(filteredData, "2030")
  const averageRiskRatingIn2040 = handleAverageRiskRatingPerYear(filteredData, "2040")
  const averageRiskRatingIn2050 = handleAverageRiskRatingPerYear(filteredData, "2050")
  const averageRiskRatingIn2060 = handleAverageRiskRatingPerYear(filteredData, "2060")
  const averageRiskRatingIn2070 = handleAverageRiskRatingPerYear(filteredData, "2070")

  //Pre-emptively filter any undefineds
  const avgDataPoints = [
    averageRiskRatingIn2030,
    averageRiskRatingIn2040,
    averageRiskRatingIn2050,
    averageRiskRatingIn2060,
    averageRiskRatingIn2070,
  ].filter((value) => value)

  const getLabels = () => {
    if (avgDataPoints.length >= 1) {
      return avgDataPoints.filter((value) => value).map((item) => item && item.year)
    } else {
      return
    }
  }

  const getValues = () => {
    if (avgDataPoints.length >= 1) {
      return avgDataPoints.filter((value) => value).map((item) => item && item.riskRating)
    } else {
      return
    }
  }

  const values = getValues()
  const labels = getLabels()

  //Populate dropdown menus
  const getListOfAllAssetNames = () => {
    const dataWithNoDuplicates = [...new Set(finalData.map((item) => item["Asset Name"]))]
    const sortedData = dataWithNoDuplicates.sort((a, b) => a.localeCompare(b))
    return sortedData
  }

  const getListOfAllBusinessCategories = () => {
    const dataWithNoDuplicates = [...new Set(finalData.map((item) => item["Business Category"]))]
    const sortedData = dataWithNoDuplicates.sort((a, b) => a.localeCompare(b))
    return sortedData
  }

  const getListOfAllLocations = () => {
    const dataWithNoDuplicates = [...new Set(finalData.map((item) => item["Lat"]))]
    const sortedData = dataWithNoDuplicates.sort()
    return sortedData
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Average Risk Rating Per Decade",
      },
      tooltip: {
        callbacks: {
          title: (data: any) => {
            let title = data[0].label
            return title
          },
          afterLabel: (data: any) => {
            const year = datas.labels && datas.labels[data.dataIndex]
            const filtered = filteredData.filter((item) => item.Year === year)
            const items = filtered.map(
              (item) => `${item["Asset Name"]} (Risk Rating: ${item["Risk Rating"]})`
            )
            return items
          },
        },
      },
    },
  }

  const datas = {
    labels,
    datasets: [
      {
        label: "Avg. Risk Rating",
        data: values && values.map((item) => item),
        borderColor: "#feac1d",
        backgroundColor: "#feac1d",
      },
    ],
  }

  return (
    <>
      <div className="max-w-[700px] xl:min-w-[700px]">
        {toggle && (
          <div className="flex gap-4 justify-around items-center p-2 flex-wrap">
            <DropdownContainer>
              <DropdownTitle>Asset Names</DropdownTitle>
              <Dropdown
                options={getListOfAllAssetNames()}
                setter={setName}
                placeholder={name}
                key="1"
              ></Dropdown>
            </DropdownContainer>

            <DropdownContainer>
              <DropdownTitle>Business Category</DropdownTitle>
              <Dropdown
                options={getListOfAllBusinessCategories()}
                setter={setCategory}
                placeholder={category}
                key="2"
              ></Dropdown>
            </DropdownContainer>

            <DropdownContainer>
              <DropdownTitle>Location</DropdownTitle>
              <Dropdown
                options={["All", ...getListOfAllLocations()]}
                setter={setLocation}
                placeholder={location}
                key="3"
              ></Dropdown>
            </DropdownContainer>
          </div>
        )}
        <div className="min-w-[350px] max-w-full">
          <Line data={datas} options={options} />
        </div>
      </div>
    </>
  )
}

export default LineChart
