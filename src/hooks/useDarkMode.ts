import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = stored === "dark" || window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  return [dark, setDark] as const
}
