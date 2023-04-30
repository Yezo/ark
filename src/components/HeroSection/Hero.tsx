export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4 py-16 sm:px-20 sm:py-24 md:px-24 md:py-32  bg-light-bg min-h-[calc(100vh-64px)] flex flex-col justify-between gap-8 lg:flex-row xl:px-72">
      {children}
    </section>
  )
}
