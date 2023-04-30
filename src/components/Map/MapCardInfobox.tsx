export default function MapCardInfobox({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-1 bg-black text-light-text ring-1 ring-black/20 max-w-fit rounded text-[0.75rem] font-semibold tracking-wider">
      {children}
    </div>
  )
}
