//Imports - TypeScript
import { ISampleData } from "@/types/ISampleData"

export default function MapRiskInfobox({ data }: { data: ISampleData }) {
  const handleRiskRating = (riskRating: string) => {
    const rating = Number(riskRating)
    if (rating >= 0 && rating < 0.2) return "NO RISK"
    if (rating >= 0.2 && rating < 0.4) return "SLIGHT RISK"
    if (rating >= 0.4 && rating < 0.6) return "POTENTIAL RISK"
    if (rating >= 0.6 && rating < 0.8) return "HIGH RISK"
    if (rating >= 0.8 && rating <= 1) return "SEVERE RISK"
    else return
  }
  return (
    <div
      className={`px-3 py-1 ring-1 ring-black/50 rounded text-[0.75rem] font-bold tracking-widest grid place-items-center
    ${handleRiskRating(data["Risk Rating"]) === "NO RISK" && "bg-green-600 text-light-text "}
    ${handleRiskRating(data["Risk Rating"]) === "SLIGHT RISK" && "bg-green-400"}
    ${handleRiskRating(data["Risk Rating"]) === "POTENTIAL RISK" && "bg-yellow-300 text-dark-text"}
    ${handleRiskRating(data["Risk Rating"]) === "HIGH RISK" && "bg-red-400"}
    ${handleRiskRating(data["Risk Rating"]) === "SEVERE RISK" && "bg-red-600 text-light-text "}
`}
    >
      {handleRiskRating(data["Risk Rating"])}
    </div>
  )
}
