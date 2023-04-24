import NavbarContainer from "@/components/Navbar/NavbarContainer"
import NavbarLink from "@/components/Navbar/NavbarLink"
import NavbarLinksContainer from "@/components/Navbar/NavbarLinksContainer"
import NavbarLogo from "@/components/Navbar/NavbarLogo"

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
            className="relative block select-none tracking-tight outline-none before:absolute before:-bottom-1.5 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#feac1d] before:transition hover:before:scale-100"
          >
            Table
          </a>
        </NavbarLinksContainer>
      </NavbarContainer>
    </>
  )
}
