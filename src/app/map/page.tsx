import dynamic from "next/dynamic"

const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
})
export default function MapPage() {
  return (
    <main className="min-h-[calc(100vh-180px)] flex flex-col gap-4 items-center justify-center">
      <Map />
    </main>
  )
}
