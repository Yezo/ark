export default function NavbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <nav className="py-5 px-20 bg-black text-light-text flex flex-col items-center justify-between gap-4 md:gap-0 md:flex-row xl:px-72">
      {children}
    </nav>
  )
}
