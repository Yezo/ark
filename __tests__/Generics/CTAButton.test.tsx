import { render, screen } from "@testing-library/react"
import CTAButton from "@/components/Generics/CTAButton"

test("button should render in the document", () => {
  render(
    <CTAButton url="/" mainType={true}>
      Hi
    </CTAButton>
  )
  const link = screen.getByRole("link")
  expect(link).toBeInTheDocument()
})

test("button should have children text rendered", () => {
  render(
    <CTAButton url="/" mainType={true}>
      Hi
    </CTAButton>
  )
  const item = screen.getByRole("link")
  expect(item).toHaveTextContent(/hi/i)
})

test("button should have a href link to a URL location", () => {
  render(
    <CTAButton url="/test-link" mainType={true}>
      Hi
    </CTAButton>
  )
  const item: HTMLAnchorElement[] = screen.getAllByRole("link")
  expect(item[0].href).toContain("/test-link")
})
