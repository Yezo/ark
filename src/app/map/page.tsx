import dynamic from "next/dynamic"

export default function MapPage() {
  const OpenStreetMap = dynamic(() => import("../../components/Map"), {
    ssr: false,
  })

  return (
    <main>
      <div>
        <OpenStreetMap />
      </div>
    </main>
  )
}
