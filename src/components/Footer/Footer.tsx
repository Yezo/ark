import Link from "next/link"
import dynamic from "next/dynamic"

const FooterContainer = dynamic(() => import("@/components/Footer/FooterContainer"))

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <p className="font-semibold text-sm">
          <span className="px-8 py-4 bg-dark-bg text-light-text rounded">
            <Link href="https://kvo.vercel.app/" className="text-accent" target="_blank">
              Designed and developed by Kevin Vo
            </Link>
          </span>
        </p>
      </FooterContainer>
    </div>
  )
}
