import FooterContainer from "@/components/Footer/FooterContainer"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="">
      <FooterContainer>
        <p className="font-semibold text-sm">
          <span className="px-8 py-4 bg-dark text-white rounded">
            <Link href="https://kvo.vercel.app/" className="text-accent">
              Designed and developed by Kevin Vo
            </Link>
          </span>
        </p>
      </FooterContainer>
    </div>
  )
}
