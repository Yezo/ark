import React from "react"

type Props = {}

export default function FooterContainer({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#EDF1F5] py-12 grid place-items-center ">{children}</div>
}
