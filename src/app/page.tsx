import Link from "next/link"
import "./globals.css"

//Imports - Dynamic
import dynamic from "next/dynamic"

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
})
const PrimeTable = dynamic(() => import("@/components/DataTable/PrimeTable"))
const LineChart = dynamic(() => import("@/components/LineChart/LineChart"), {
  ssr: false,
})
const ProjectSectionContainer = dynamic(
  () => import("@/components/ProjectSection/ProjectSectionContainer")
)

const ProjectSideContainer = dynamic(
  () => import("@/components/ProjectSection/ProjectSideContainer")
)
const ProjectSectionTitle = dynamic(() => import("@/components/ProjectSection/ProjectSectionTitle"))
const ProjectSectionSubtitle = dynamic(
  () => import("@/components/ProjectSection/ProjectSectionSubtitle")
)
const ProjectSectionCTA = dynamic(() => import("@/components/ProjectSection/ProjectSectionCTA"))
const ProjectSectionTextContainer = dynamic(
  () => import("@/components/ProjectSection/ProjectSectionTextContainer")
)
export default function Home() {
  return (
    <main>
      <header className="py-20 px-4 md:px-80 bg-[#EDF1F5] min-h-[calc(100vh-64px)]">
        <h2 className="text-6xl font-bold text-dark">
          Climate risk could end up as your financial risk
        </h2>
        <p className="max-w-[55ch] text-text">
          Earth is facing climate change problems at an unprecedented rate. With riskthinking, users
          can now peek into the future with worldwide data all in the palm of their hands. The first
          and only true enterprise solution for climate financial risk.
        </p>

        <Link href="/"></Link>
      </header>

      <ProjectSectionContainer reverse={false} darkMode={true}>
        <ProjectSectionTextContainer>
          <ProjectSectionTitle>
            Worldwide <span className="text-accent">risk</span> ratings
          </ProjectSectionTitle>
          <ProjectSectionSubtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cupiditate tempora
            provident ut ea vitae fugit quas atque nisi molestias temporibus, eius sint voluptate
            sit corporis officia labore? Tempore quidem rem hic obcaecati ipsam fugit ab labore?
            Velit quasi, ex natus blanditiis nobis sequi porro iste error ipsa nam expedita!
          </ProjectSectionSubtitle>

          <ProjectSectionCTA url="/map"></ProjectSectionCTA>
        </ProjectSectionTextContainer>

        <ProjectSideContainer>
          <Map />
        </ProjectSideContainer>
      </ProjectSectionContainer>

      <ProjectSectionContainer reverse={true} darkMode={false}>
        <ProjectSectionTextContainer>
          <ProjectSectionTitle>Easily digestible data in every form imaginable</ProjectSectionTitle>
          <ProjectSectionSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias illum et
            minima, cumque ab libero consequatur culpa veritatis? Enim, magni libero. Tempora rerum
            doloremque numquam impedit perspiciatis illum consequatur illo sunt beatae, aperiam
            totam?
          </ProjectSectionSubtitle>

          <ProjectSectionCTA url="/chart"></ProjectSectionCTA>
        </ProjectSectionTextContainer>

        <ProjectSideContainer>
          <LineChart />
        </ProjectSideContainer>
      </ProjectSectionContainer>

      <ProjectSectionContainer reverse={false} darkMode={true}>
        <ProjectSectionTextContainer>
          <ProjectSectionTitle>
            Tabulated data for multiple <span className="text-accent">asset types</span> and
            <span className="text-accent"> risk factors</span>
          </ProjectSectionTitle>
          <ProjectSectionSubtitle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit cum deserunt soluta vel
            dolores quasi ad aut rem odio porro repellat accusamus expedita corporis minus, saepe
            deleniti perspiciatis voluptate aspernatur delectus! Atque sequi reprehenderit iusto,
            necessitatibus fuga mollitia autem maxime dolore dolor quis id ipsum illum non nihil
            asperiores ipsam culpa accusamus blanditiis sit eligendi libero suscipit at. Sunt, esse.
          </ProjectSectionSubtitle>

          <ProjectSectionCTA url="/table"></ProjectSectionCTA>
        </ProjectSectionTextContainer>

        <ProjectSideContainer>
          <PrimeTable hideCategories={true} rowAmount={10} />
        </ProjectSideContainer>
      </ProjectSectionContainer>
    </main>
  )
}
