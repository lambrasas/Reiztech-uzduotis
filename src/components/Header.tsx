import { Link } from 'react-router-dom'
import Logo from './Logo'
import NavBar from './NavBar'
import ThemeToggle from './ThemeToggle'
import styles from '../styles/styles.module.scss'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme } = useTheme()

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <Logo
            className={styles.reizLogo}
            fillColor={theme === 'dark' ? '#00e12e' : '#313133'}
          />
        </Link>
        <ThemeToggle />
      </div>
      <NavBar />
    </div>
  )
}

export default Header
