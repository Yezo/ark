import { renderHook } from "@testing-library/react"
import { useParse } from "@/hooks/useParse"

test("returns an array after parsing", async () => {
  const { result } = renderHook(() =>
    useParse(
      "https://docs.google.com/spreadsheets/d/11R-Ak5Edggygo4nXv9QjU32ATR75-UDKeyBsZlOx-fI/pub?output=csv"
    )
  )

  expect(result.current.data.length).toBeGreaterThanOrEqual(0)
})
