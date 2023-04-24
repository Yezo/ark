"use client"
import { ISampleData } from "@/types/ISampleData"
import { useEffect, useState } from "react"
import Papa from "papaparse"

export const useParse = (url: string) => {
  const [data, setData] = useState<ISampleData[]>([])

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results: Papa.ParseResult<ISampleData>) => {
        if (results.data) setData(results.data)
      },
    })
  }, [url])

  return { data, setData }
}
