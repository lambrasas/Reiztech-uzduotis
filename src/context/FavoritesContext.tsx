import { useEffect, useState, ReactNode } from 'react'
import { Show } from '../types/show'
import { FavoritesContext } from '../hooks/useFavorites'

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Show[]>(() => {
    try {
      const stored = localStorage.getItem('favorites')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    } catch (error) {
      console.error('Error saving favorites to localStorage', error)
    }
  }, [favorites])

  const toggleFavorite = (show: Show) => {
    setFavorites((prev) =>
      prev.some((favorite) => favorite.id === show.id)
        ? prev.filter((favorite) => favorite.id !== show.id)
        : [...prev, show]
    )
  }

  const isFavorite = (showId: number) =>
    favorites.some((favorite) => favorite.id === showId)

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
