"use client"
import { useState, useRef, useEffect } from "react"

type Props = {
  setter: React.Dispatch<React.SetStateAction<string | null>>
  options: string[]
  placeholder: string | null
}

export default function Dropdown({ options, setter, placeholder }: Props) {
  //States
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const dropdownMenu = useRef<HTMLInputElement>(null)

  useEffect(() => {
    //Close the dropdown if the user clicks anywhere outside of the menu

    const closeOpenMenus = (e: any) => {
      if (dropdownMenu.current && isExpanded && !dropdownMenu.current.contains(e.target)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener("mousedown", closeOpenMenus)
  }, [isExpanded])

  return (
    <div ref={dropdownMenu}>
      <button
        className={`scrollbar flex min-w-[12rem] items-center  justify-between rounded bg-secondary  px-3 py-2 text-[0.845rem] font-semibold shadow-md ring-1 ring-black/[.15] transition-colors hover:bg-accent hover:text-dark bg-dark text-white`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{placeholder}</span>
        <span>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          )}
        </span>
      </button>
      {isExpanded && (
        <div className="absolute mt-[4.5px] flex min-w-[12rem] max-w-fit cursor-pointer flex-col gap-5 overflow-y-auto rounded bg-secondary ring-1 ring-black/[.15] text-sm bg-dark text-white font-semibold max-h-[15.5rem]">
          <div className="">
            {options.map((option) => (
              <div
                onClick={() => {
                  setIsExpanded(false)
                  setter(option)
                }}
                className="px-3 py-2 transition-colors hover:bg-accent hover:text-dark "
                key={option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
