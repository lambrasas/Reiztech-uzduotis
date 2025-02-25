import React from 'react'
import styles from '../styles/styles.module.scss'
import { Show } from '../types/show'
import { useFavorites } from '../hooks/useFavorites'
import { useTheme } from '../context/ThemeContext'

interface HeartButtonProps {
  show: Show
}

export const HeartButton: React.FC<HeartButtonProps> = ({ show }) => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const liked = isFavorite(show.id)
  const { theme } = useTheme()

  const greenBorder = 'rgb(9, 224, 70)'
  const grayBorder = '#595958'

  const insideColor = theme === 'dark' ? '#39393e' : 'white'

  return (
    <button
      className={styles.heartButton}
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        toggleFavorite(show)
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={insideColor}
        stroke={liked ? greenBorder : grayBorder}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             C2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
             C13.09 3.81 14.76 3 16.5 3
             C19.58 3 22 5.42 22 8.5
             c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
  )
}
