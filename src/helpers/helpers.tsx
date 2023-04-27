import { ISampleData } from "@/types/ISampleData"

export const flat = (
  obj: ISampleData & {
    risks: any
  },
  out: any
) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key as keyof typeof obj] == "object") {
      out = flat(obj[key as keyof typeof obj], out) //recursively call for nesteds
    } else {
      out[key] = obj[key as keyof typeof obj] //direct assign for values
    }
  })
  return out
}
