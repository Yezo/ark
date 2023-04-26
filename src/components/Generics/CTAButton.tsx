import Link from "next/link"

type Props = {
  url: string
  children: React.ReactNode
  mainType: boolean
}

export default function CTAButton({ url, children, mainType }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href={url}
        className={`font-semibold tracking-wide rounded px-6 py-3 text-[0.845rem] shadow-md  transition-colors  ${
          mainType
            ? "bg-accent text-dark-text hover:bg-accent hover:text-dark-text ring-2 ring-black"
            : "bg-transparent text-dark-text ring-2 ring-black hover:bg-accent hover:text-dark-text hover:ring-black"
        }`}
      >
        {children}
      </Link>
    </div>
  )
}
