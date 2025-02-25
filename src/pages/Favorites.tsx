import React from 'react'
import ShowComponent from '../components/ShowComponent'
import styles from '../styles/styles.module.scss'
import { useFavorites } from '../hooks/useFavorites'

const Favorites: React.FC = () => {
  const { favorites } = useFavorites()

  return (
    <div className={styles.favoritesContainer}>
      {favorites.length === 0 ? (
        <div>No favorites yet.</div>
      ) : (
        <div className={styles.showsGrid}>
          {favorites.map((show) => (
            <ShowComponent key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
