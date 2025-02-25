import { Show } from '../types/show'
import { useFavorites } from '../hooks/useFavorites'
import styles from '../styles/styles.module.scss'

interface DetailedShowComponentProps {
  show: Show
}

const removeHtmlTags = (html: string | null) => {
  if (!html) return ''
  return html.replace(/<[^>]*>?/gm, '')
}

const DetailedShowComponent: React.FC<DetailedShowComponentProps> = ({
  show,
}) => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const properSummary = removeHtmlTags(show.summary)
  const favorite = isFavorite(show.id)

  return (
    <div className={styles.IndividualShowContainer}>
      <div className={styles.poster}>
        <img
          src={show.image?.original}
          alt="Poster"
          className={styles.showPoster}
        />
      </div>

      <div className={styles.summary}>
        <h1>{show.name}</h1>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite(show)
          }}
          className={styles.favoriteLink}
        >
          {favorite ? 'Remove from favorites' : 'Add to favorites'}
        </a>
        <p>{properSummary}</p>
      </div>

      <div className={styles.info}>
        <p>Premiered: {show.premiered}</p>
        <p>Ended: {show.ended}</p>
        <p>Average runtime: {show.runtime} minutes</p>
        <p>Show status: {show.status}</p>
        <p>Language: {show.language}</p>
        <p>Average rating: {show.rating.average}</p>
        <p>
          Official site:{' '}
          {show.officialSite ? (
            <a
              href={show.officialSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to official Site
            </a>
          ) : (
            'N/A'
          )}
        </p>
        <p>Genres: {show.genres.join(', ')}</p>
      </div>
    </div>
  )
}

export default DetailedShowComponent
