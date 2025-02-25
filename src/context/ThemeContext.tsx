import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: (newTheme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    if (newTheme === 'dark') {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
