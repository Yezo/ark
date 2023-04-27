import { render, screen } from "@testing-library/react"
import FooterContainer from "@/components/Footer/FooterContainer"
import Link from "next/link"

test("footer should render a h1 tag", () => {
  render(
    <FooterContainer>
      <p className="font-semibold text-sm">
        <span className="px-8 py-4 bg-dark-bg text-light-text rounded">
          <Link
            href="https://kvo.vercel.app/"
            className="text-accent"
            target="_blank"
            data-testid="footertext"
          >
            Designed and developed by Kevin Vo
          </Link>
        </span>
      </p>
    </FooterContainer>
  )
  const spanElements = screen.getByTestId("footertext")
  expect(spanElements).toBeInTheDocument()
})
test("footer should say its designed and developed by kevin vo", () => {
  render(
    <FooterContainer>
      <p className="font-semibold text-sm">
        <span className="px-8 py-4 bg-dark-bg text-light-text rounded">
          <Link
            href="https://kvo.vercel.app/"
            className="text-accent"
            target="_blank"
            data-testid="footertext"
          >
            Designed and developed by Kevin Vo
          </Link>
        </span>
      </p>
    </FooterContainer>
  )
  const item = screen.getByRole("link")
  expect(item).toHaveTextContent(/designed and developed by kevin vo/i)
})
