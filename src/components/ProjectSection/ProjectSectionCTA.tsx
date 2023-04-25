import Link from "next/link"

export default function ProjectSectionCTA({ url }: { url: string }) {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href={url}
        className="scrollbar flex  items-center text-dark font-semibold tracking-wide justify-between rounded bg-accent px-6 py-3 text-[0.845rem] shadow-md ring-1 ring-black/[.15] transition-colors hover:bg-[#fcce71] hover:text-dark"
      >
        View in detail →
      </Link>
    </div>
  )
}
