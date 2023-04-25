type Props = {
  children: React.ReactNode
  reverse?: boolean
  darkMode?: boolean
}
export default function ProjectSectionContainer({ children, reverse, darkMode }: Props) {
  return (
    <div
      className={`flex justify-between py-52 gap-8 px-4 md:px-80 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }
      ${darkMode && "text-white bg-black"}
      ${!darkMode && "text-black bg-white"}
      `}
    >
      {children}
    </div>
  )
}
