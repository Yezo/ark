import Link from "next/link"
import "./globals.css"

//Imports - Dynamic
import dynamic from "next/dynamic"
import Image from "next/image"
import hero from "../../public/hero.webp"

const CTAButton = dynamic(() => import("@/components/Generics/CTAButton"))
const ProjectContainer = dynamic(() => import("@/components/ProjectSection/ProjectContainer"))
export default function Home() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-20 sm:py-24 md:px-24 md:py-32 xl:px-52 bg-light-bg min-h-[calc(100vh-64px)] flex flex-col justify-between gap-8 lg:flex-row">
        <div className="basis-1/2 space-y-10">
          <h2 className="text-6xl font-bold text-dark-text">
            Climate risk could end up as your financial risk
          </h2>
          <p className="max-w-[55ch] text-dark-text">
            Earth is facing climate change problems at an unprecedented rate. With riskthinking,
            users can now peek into the future with worldwide data all in the palm of their hands.
            The first and only true enterprise solution for climate financial risk.
          </p>
          <div className="flex items-center gap-4">
            <CTAButton url="/" mainType={false}>
              Learn more
            </CTAButton>
            <CTAButton url="/" mainType={true}>
              Sign up today →
            </CTAButton>
          </div>
        </div>

        <div className="basis-1/2">
          <Image src={hero} alt="Image of climate change" placeholder="blur" />
        </div>

        <Link href="/"></Link>
      </section>

      <ProjectContainer></ProjectContainer>
    </main>
  )
}
