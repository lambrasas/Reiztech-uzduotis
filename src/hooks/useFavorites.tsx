import { createContext, useContext } from 'react'
import { Show } from '../types/show'

interface FavoritesContextType {
  favorites: Show[]
  toggleFavorite: (show: Show) => void
  isFavorite: (showId: number) => boolean
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
