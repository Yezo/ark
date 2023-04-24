export default function NavbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <nav className="py-4 px-20 bg-black text-white flex flex-col items-center justify-between gap-4 md:gap-0 md:flex-row">
      {children}
    </nav>
  )
}
