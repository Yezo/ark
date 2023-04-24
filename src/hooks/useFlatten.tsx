"use client"
import { ISampleData, ISampleDataFixed } from "@/types/ISampleData"
import { useEffect, useState } from "react"
import { flat } from "@/helpers/helpers"

export const useFlatten = (data: ISampleData[]) => {
  const [flattenedData, setFlattenedData] = useState<ISampleDataFixed[]>([])

  useEffect(() => {
    //Parsing the data returns the Risk Factors as an entire text of string disguised as an object
    //Transform the risk factors into its own object so that we can work with key value pairs
    const listOfRiskFactors = data && data.map((item) => JSON.parse(item["Risk Factors"]))

    // There are data points with too many decimal places
    // Trim extra decimal places using toFixed on all values
    // However, we want to avoid giving this treatment to Lat + Long + Year
    // Otherwise we'd end up with Year values like "2030.00" or "2040.00"
    // Therefore, we apply the trim only to the risk factors
    //https://stackoverflow.com/questions/64451221/update-all-object-values-to-be-rounded-by-two-decimals
    listOfRiskFactors.forEach(function (r) {
      let rValues = Object.entries(r)
      rValues.forEach(function (e) {
        // e[0] is the key and e[1] is the value
        let n = Number(e[1])
        if (!isNaN(n)) {
          r[e[0]] = n.toFixed(2)
        }
      })
    })

    //Stitch the data back together by reassigning the trimmed risk factors
    const dataWithNewRiskFactors = data.map((item, index) =>
      Object.assign(item, { risks: listOfRiskFactors[index] })
    )
    //Finally, we flatten the data so that it can be easily worked with in tables
    const finalData: ISampleDataFixed[] = dataWithNewRiskFactors.map((item) => flat(item, {}))

    setFlattenedData(finalData)
  }, [data])

  return { flattenedData, setFlattenedData }
}
