import React from "react"

type Props = {}

export default function DropdownTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-semibold text-[0.8rem] px-3 py-1 bg-accent text-dark rounded ring-1 ring-black/[.15] ">
      {children}
    </h4>
  )
}
