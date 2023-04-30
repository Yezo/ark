"use client"

//Imports - Dynamic
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/Map"), {
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
const ProjectSectionTextContainer = dynamic(
  () => import("@/components/ProjectSection/ProjectSectionTextContainer")
)
const CTAButton = dynamic(() => import("@/components/Generics/CTAButton"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
export default function ProjectContainer() {
  return (
    <>
      <ProjectSectionContainer reverse={false} darkMode={true}>
        <ProjectSectionTextContainer>
          <TitleH2>
            Worldwide <span className="text-accent">risk</span> ratings
          </TitleH2>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cupiditate tempora
            provident ut ea vitae fugit quas atque nisi molestias temporibus, eius sint voluptate
            sit corporis officia labore? Tempore quidem rem hic obcaecati ipsam fugit ab labore?
            Velit quasi, ex natus blanditiis nobis sequi porro iste error ipsa nam expedita!
          </Paragraph>

          <CTAButton url="/map" mainType={true}>
            View maps in detail →
          </CTAButton>
        </ProjectSectionTextContainer>

        <ProjectSideContainer>
          <Map />
        </ProjectSideContainer>
      </ProjectSectionContainer>

      <ProjectSectionContainer reverse={true} darkMode={false}>
        <ProjectSectionTextContainer>
          <TitleH2>
            Easily digestible data in <span className="text-accent">every form</span> imaginable
          </TitleH2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias illum et
            minima, cumque ab libero consequatur culpa veritatis? Enim, magni libero. Tempora rerum
            doloremque numquam impedit perspiciatis illum consequatur illo sunt beatae, aperiam
            totam?
          </Paragraph>

          <CTAButton url="/chart" mainType={true}>
            View charts in detail →
          </CTAButton>
        </ProjectSectionTextContainer>

        <ProjectSideContainer>
          <LineChart />
        </ProjectSideContainer>
      </ProjectSectionContainer>

      <ProjectSectionContainer reverse={false} darkMode={true}>
        <ProjectSectionTextContainer>
          <TitleH2>
            Tabulated data for multiple <span className="text-accent">asset types</span> and
            <span className="text-accent"> risk factors</span>
          </TitleH2>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit cum deserunt soluta vel
            dolores quasi ad aut rem odio porro repellat accusamus expedita corporis minus, saepe
            deleniti perspiciatis voluptate aspernatur delectus! Atque sequi reprehenderit iusto,
            necessitatibus fuga mollitia autem maxime dolore dolor quis id ipsum illum non nihil
            asperiores ipsam culpa accusamus blanditiis sit eligendi libero suscipit at. Sunt, esse.
          </Paragraph>

          <CTAButton url="/table" mainType={true}>
            View tables in detail →
          </CTAButton>
        </ProjectSectionTextContainer>

        <ProjectSideContainer>
          <PrimeTable hideCategories={true} rowAmount={10} />
        </ProjectSideContainer>
      </ProjectSectionContainer>
    </>
  )
}
