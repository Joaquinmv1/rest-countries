import { useState, useEffect } from "react"

export const useThemeMode = (): [string, () => void] => {
  const storageTheme = window.localStorage.getItem('theme')
  const [theme, setTheme] = useState<string>("default");

  useEffect(() => {
    storageTheme && setTheme(storageTheme)
  }, [])

  const toggleTheme = () => {
    if (theme === 'default') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'default')
      setTheme("default");
    }
  }

  return [theme, toggleTheme];
}
