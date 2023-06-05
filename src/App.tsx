import { Navbar } from "./components"
import { Countries, CountrieDetail } from "./pages"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useThemeMode } from "./hooks"
import { themes } from "./utils/theme"
import { ThemeKey } from "./types/types"

function App() {
  const [theme, toggleTheme] = useThemeMode()

  return (
    <ThemeProvider theme={themes[theme as ThemeKey]}>
      <Navbar
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countrie/:countrie" element={<CountrieDetail />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
