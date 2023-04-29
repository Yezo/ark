//Imports
import dynamic from "next/dynamic"
import "./globals.css"

const CTAButton = dynamic(() => import("@/components/Generics/CTAButton"))
const ProjectContainer = dynamic(() => import("@/components/ProjectSection/ProjectContainer"))
const Hero = dynamic(() => import("@/components/HeroSection/Hero"))
const HeroTextSection = dynamic(() => import("@/components/HeroSection/HeroTextSection"))
const HeroTitle = dynamic(() => import("@/components/HeroSection/HeroTitle"))
const HeroSubtitle = dynamic(() => import("@/components/HeroSection/HeroSubtitle"))
const HeroButtonContainer = dynamic(() => import("@/components/HeroSection/HeroButtonContainer"))
const HeroBanner = dynamic(() => import("@/components/HeroSection/HeroBanner"))

export default function Home() {
  return (
    <main>
      <Hero>
        <HeroTextSection>
          <HeroTitle>Climate risk could end up as your financial risk</HeroTitle>
          <HeroSubtitle>
            Earth is facing climate change problems at an unprecedented rate. With riskthinking,
            users can now peek into the future with worldwide data all in the palm of their hands.
            The first and only true enterprise solution for climate financial risk.
          </HeroSubtitle>
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
