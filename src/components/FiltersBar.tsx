import { useMemo } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import styles from '../styles/styles.module.scss'
import { useTheme } from '../context/ThemeContext'
import { getCustomSelectStyles } from '../utils/customSelectStyles'

interface Option {
  value: string
  label: string
}

interface FiltersBarProps {
  statusFilter: string
  setStatusFilter: (value: string) => void
  statusOptions: string[]
  genreFilter: string[]
  setGenreFilter: (value: string[]) => void
  genreOptions: string[]
}

const FiltersBar: React.FC<FiltersBarProps> = ({
  statusFilter,
  setStatusFilter,
  statusOptions,
  genreFilter,
  setGenreFilter,
  genreOptions,
}) => {
  const { theme } = useTheme()

  const selectStatusOptions: Option[] = useMemo(
    () => [
      { value: 'All', label: 'All' },
      ...statusOptions.map((status) => ({
        value: status,
        label: status,
      })),
    ],
    [statusOptions]
  )

  const selectGenreOptions: Option[] = useMemo(
    () =>
      genreOptions.map((genre) => ({
        value: genre,
        label: genre,
      })),
    [genreOptions]
  )

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterItem}>
        <ReactSelect
          className={styles.ReactSelect}
          styles={getCustomSelectStyles(theme)}
          options={selectGenreOptions}
          value={selectGenreOptions.filter((option) =>
            genreFilter.includes(option.value)
          )}
          onChange={(selected: OnChangeValue<Option, true>) => {
            setGenreFilter(selected ? selected.map((o) => o.value) : [])
          }}
          placeholder="Genre filter"
          isMulti
          isClearable={true}
        />
      </div>
      <div className={styles.filterItem}>
        <ReactSelect
          className={styles.ReactSelect}
          styles={getCustomSelectStyles(theme)}
          options={selectStatusOptions}
          value={selectStatusOptions.find(
            (option) => option.value === statusFilter
          )}
          onChange={(option) =>
            setStatusFilter((option as Option)?.value || 'All')
          }
          placeholder="Status filter"
          isClearable={false}
        />
      </div>
    </div>
  )
}

export default FiltersBar
