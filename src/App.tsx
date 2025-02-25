import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Footer from './components/Footer'
import styles from './styles/styles.module.scss'
import { ThemeProvider } from './context/ThemeContext'
const App = () => {
  return (
    <div className={styles.app}>
      <FavoritesProvider>
        <ThemeProvider>
          <Header />
          <Outlet />
        </ThemeProvider>
      </FavoritesProvider>
      <Footer />
    </div>
  )
}

export default App
