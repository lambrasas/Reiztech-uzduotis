import { useMemo } from 'react'
import { Show } from '../types/show'

export function useSortedFilteredShows(
  shows: Show[],
  statusFilter: string,
  genreFilter: string[],
  sortOption: string
): Show[] {
  return useMemo(() => {
    const filtered = shows.filter((show) => {
      const statusMatches =
        statusFilter === 'All' || show.status === statusFilter
      const genreMatches =
        genreFilter.length === 0 ||
        genreFilter.every((selectGenre) => show.genres.includes(selectGenre))
      return statusMatches && genreMatches
    })

    if (sortOption === 'none') return filtered

    const sorted = [...filtered]

    switch (sortOption) {
      case 'nameAsc':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'nameDesc':
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'premierAsc':
        sorted.sort((a, b) => {
          const da = a.premiered ? new Date(a.premiered) : new Date(0)
          const db = b.premiered ? new Date(b.premiered) : new Date(0)
          return da.getTime() - db.getTime()
        })
        break
      case 'premierDesc':
        sorted.sort((a, b) => {
          const da = a.premiered ? new Date(a.premiered) : new Date(0)
          const db = b.premiered ? new Date(b.premiered) : new Date(0)
          return db.getTime() - da.getTime()
        })
        break
      default:
        break
    }
    return sorted
  }, [shows, statusFilter, genreFilter, sortOption])
}
