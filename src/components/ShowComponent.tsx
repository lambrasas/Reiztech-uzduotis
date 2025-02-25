import React from 'react'
import { Show } from '../types/show'
import { HeartButton } from './HeartButton'
import styles from '../styles/styles.module.scss'
import { useNavigate } from 'react-router-dom'

interface ShowProps {
  show: Show
}
const removeHtmlTags = (html: string | null) => {
  if (!html) return ''
  return html.replace(/<[^>]*>?/gm, '')
}

const ShowComponent: React.FC<ShowProps> = ({ show }) => {
  const navigate = useNavigate()
  const originalSummary = removeHtmlTags(show.summary)
  const maxWords = 15

  const words = originalSummary.split(/\s+/)
  let displaySummary = originalSummary

  if (words.length > maxWords) {
    displaySummary = words.slice(0, maxWords).join(' ') + '...'
  }

  return (
    <div
      className={styles.showComponentContainer}
      onClick={() => navigate(`/show/${show.id}`)}
    >
      <HeartButton show={show} />
      <img
        className={styles.showPicture}
        src={show.image?.medium}
        alt="Image"
      />
      <div className={styles.showInfo}>
        <div>
          <h2>{show.name}</h2>
          <p>{displaySummary}</p>
        </div>
        <div className={styles.showDetails}>
          <div className={styles.rating}>
            <span>Rating </span>
            <span>{show.rating.average}/10</span>
          </div>
          <p>{show.genres.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

export default ShowComponent
