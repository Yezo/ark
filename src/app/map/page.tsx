import dynamic from "next/dynamic"

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
})
export default function MapPage() {
  return (
    <main>
      <div>
        <Map />
      </div>
    </main>
  )
}
