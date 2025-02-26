import React from 'react'
import ReactSwitch from 'react-switch'
import { useTheme } from '../context/ThemeContext'
import styles from '../styles/styles.module.scss'
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <ReactSwitch
      onChange={(checked) => toggleTheme(checked ? 'light' : 'dark')}
      checked={theme === 'light'}
      onColor={'#343434'}
      offColor={'#413f4b'}
      onHandleColor={'#03b131'}
      offHandleColor={'#ffffff'}
      uncheckedIcon={false}
      checkedIcon={false}
      handleDiameter={18}
      className={styles.customSwitch}
    />
  )
}

export default ThemeToggle
