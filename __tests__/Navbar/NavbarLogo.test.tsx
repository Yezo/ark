import { render, screen } from "@testing-library/react"
import NavbarLogo from "@/components/Navbar/NavbarLogo"

test("navbar should render a h1 tag", () => {
  render(<NavbarLogo />)
  const headingElement = screen.getByRole("heading")
  expect(headingElement).toBeInTheDocument()
})

test("navbar should render an anchor tag", () => {
  render(<NavbarLogo />)
  const linkElement = screen.getByRole("link")
  expect(linkElement).toBeInTheDocument()
})

test("navbar should render 3 spans", () => {
  render(<NavbarLogo />)
  const spanElements = screen.getAllByTestId("span")
  expect(spanElements).toHaveLength(3)
})
