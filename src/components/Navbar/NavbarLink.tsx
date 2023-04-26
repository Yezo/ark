import Link from "next/link"

type Props = {
  url: string
  link: string
}

export default function NavbarLink({ url, link }: Props) {
  return (
    <Link
      href={url}
      className="relative block select-none tracking-tight outline-none before:absolute before:-bottom-1.5 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition hover:before:scale-100"
    >
      <li>{link}</li>
    </Link>
  )
}
