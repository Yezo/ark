import { renderHook } from "@testing-library/react"
import { useParse } from "@/hooks/useParse"
import { useFlatten } from "@/hooks/useFlatten"

test("returns an array after flattening the parsed array", async () => {
  const { result: parsedData } = renderHook(() =>
    useParse(
      "https://docs.google.com/spreadsheets/d/11R-Ak5Edggygo4nXv9QjU32ATR75-UDKeyBsZlOx-fI/pub?output=csv"
    )
  )
  const { result } = renderHook(() => useFlatten(parsedData.current.data))

  expect(result.current.flattenedData.length).toBeGreaterThanOrEqual(0)
})
