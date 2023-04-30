//Imports
import dynamic from "next/dynamic"
import "./globals.css"

const CTAButton = dynamic(() => import("@/components/Generics/CTAButton"))
const ProjectContainer = dynamic(() => import("@/components/ProjectSection/ProjectContainer"))
const Hero = dynamic(() => import("@/components/HeroSection/Hero"))
const HeroTextSection = dynamic(() => import("@/components/HeroSection/HeroTextSection"))
const HeroButtonContainer = dynamic(() => import("@/components/HeroSection/HeroButtonContainer"))
const HeroBanner = dynamic(() => import("@/components/HeroSection/HeroBanner"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))

export default function Home() {
  return (
    <main className="">
      <Hero>
        <HeroTextSection>
          <TitleH1>Climate risk could end up as your financial risk</TitleH1>
          <Paragraph>
            Riskthinking.ai is a leading cleantech company focusing on uncovering climate change’s
            financial impact on countries, corporations, banks, insurance, and asset management
            companies. We do this at scale for the enterprise, cutting across the many silos that
            exist. Our platforms for climate and physical asset data help uncover the blind spots
            that almost all other available systems may miss.
          </Paragraph>
          <HeroButtonContainer>
            <CTAButton url="/" mainType={false}>
              Learn more
            </CTAButton>
            <CTAButton url="/" mainType={true}>
              Sign up today →
            </CTAButton>
          </HeroButtonContainer>
        </HeroTextSection>

        <HeroBanner />
      </Hero>

      <ProjectContainer />
    </main>
  )
}
