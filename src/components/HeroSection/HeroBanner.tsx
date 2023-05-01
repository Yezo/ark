//Imports - Next
import Image from "next/image"

//Imports - Images
import hero from "../../../public/hero.webp"

export default function HeroBanner() {
  return (
    <div className="basis-1/2">
      <Image
        src={hero}
        alt="Image of climate change"
        placeholder="blur"
        className="border-4 border-accent"
      />
    </div>
  )
}
