import { ISampleData } from "@/types/ISampleData"
import { atom } from "jotai"

export const decadeAtom = atom<string | null>("2030")
export const nameAtom = atom<string | null>("Acevedo-Kennedy")
export const categoryAtom = atom<string | null>("Energy")
export const locationAtom = atom<string | null>("All")
export const dataAtom = atom<ISampleData | null>(null)
