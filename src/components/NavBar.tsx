import { NavLink } from 'react-router-dom'
import styles from '../styles/styles.module.scss'

const NavBar = () => {
  return (
    <div className={styles.linksContainer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.activeLink : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.activeLink : ''}`
        }
      >
        Favorites
      </NavLink>
    </div>
  )
}

export default NavBar
