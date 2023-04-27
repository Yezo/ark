import dynamic from "next/dynamic"

const NavbarContainer = dynamic(() => import("@/components/Navbar/NavbarContainer"))
const NavbarLinksContainer = dynamic(() => import("@/components/Navbar/NavbarLinksContainer"))
const NavbarLink = dynamic(() => import("@/components/Navbar/NavbarLink"))
const NavbarLogo = dynamic(() => import("@/components/Navbar/NavbarLogo"))

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarLogo />

        <NavbarLinksContainer>
          <NavbarLink url="/map" link="Map" />
          <NavbarLink url="/chart" link="Chart" />

          {/* Some of the PrimeReact's Data Table's CSS doesn't get rendered properly if you use a NextJS Link lol */}
          <a
            href="/table"
            className="relative block select-none tracking-tight outline-none before:absolute before:-bottom-1.5 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition hover:before:scale-100"
          >
            Table
          </a>
        </NavbarLinksContainer>
      </NavbarContainer>
    </>
  )
}
