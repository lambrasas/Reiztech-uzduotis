import React from 'react'
import ReactSwitch from 'react-switch'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <ReactSwitch
      onChange={(checked) => toggleTheme(checked ? 'dark' : 'light')}
      checked={theme === 'dark'}
      onColor="#000000"
      offColor="#cccccc"
      uncheckedIcon={false}
      checkedIcon={false}
    />
  )
}

export default ThemeToggle
