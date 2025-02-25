import { useEffect, useMemo, useState } from 'react'
import { fetchShows } from '../api/api'
import { Show } from '../types/show'
import ShowComponent from '../components/ShowComponent'
import Pagination from '../components/Pagination'
import FiltersBar from '../components/FiltersBar'
import styles from '../styles/styles.module.scss'
import { useSortedFilteredShows } from '../hooks/useSortedFilteredShows'
import SortBar from '../components/SortBar'

const Home = () => {
  const [shows, setShows] = useState<Show[]>([])

  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [statusFilter, setStatusFilter] = useState<string>('All')
  const [genreFilter, setGenreFilter] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<string>('none')

  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getShows = async () => {
      try {
        setIsLoading(true)
        const data = await fetchShows()
        setShows(data)
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'An error occurred'
        console.error('Error fetching shows: ', error)
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }
    getShows()
  }, [])

  const statusOptions = useMemo(() => {
    return Array.from(new Set(shows.map((show) => show.status)))
  }, [shows])

  const genreOptions = useMemo(() => {
    const allGenres = shows.flatMap((show) => show.genres)
    return Array.from(new Set(allGenres))
  }, [shows])

  const sortedFilteredShows = useSortedFilteredShows(
    shows,
    statusFilter,
    genreFilter,
    sortOption
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [statusFilter, genreFilter, sortOption])

  const totalPages = Math.ceil(sortedFilteredShows.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentShows = sortedFilteredShows.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.homeContainer}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.filtersContainer}>
            <SortBar sortOption={sortOption} setSortOption={setSortOption} />
            <FiltersBar
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              statusOptions={statusOptions}
              genreFilter={genreFilter}
              setGenreFilter={setGenreFilter}
              genreOptions={genreOptions}
            />
          </div>

          <div className={styles.showsGrid}>
            {currentShows.map((show) => (
              <ShowComponent key={show.id} show={show} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Home
