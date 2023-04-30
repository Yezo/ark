export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <h2 className="leading-7 [&:not(:first-child)]:mt-6 max-w-[55ch]">{children}</h2>
}
