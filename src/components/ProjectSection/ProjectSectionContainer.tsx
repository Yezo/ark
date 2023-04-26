type Props = {
  children: React.ReactNode
  reverse?: boolean
  darkMode?: boolean
}
export default function ProjectSectionContainer({ children, reverse, darkMode }: Props) {
  return (
    <div
      className={`flex flex-col justify-between gap-8 px-4 py-16 sm:px-20 sm:py-24 md:px-24 md:py-32 xl:px-52 tracking-tighter ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }
      ${darkMode && "text-light-text bg-dark-bg"}
      ${!darkMode && "text-dark-bg bg-light-bg"}
      `}
    >
      {children}
    </div>
  )
}
