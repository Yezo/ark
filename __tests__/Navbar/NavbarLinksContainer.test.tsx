import NavbarLink from "@/components/Navbar/NavbarLink"
import { render, screen } from "@testing-library/react"

test("navbar link should render out a link", () => {
  render(<NavbarLink url="/" link="Map" />)
  const linkElement = screen.getByRole("link")
  expect(linkElement).toBeInTheDocument()
})

test("navbar link should render out the text Map", () => {
  render(<NavbarLink url="/" link="Map" />)
  const buttonEl = screen.getByRole("listitem")
  expect(buttonEl).toHaveTextContent(/map/i)
})
