import { useMemo } from 'react'
import styles from '../styles/styles.module.scss'
import { getCustomSelectStyles } from '../utils/customSelectStyles'
import ReactSelect from 'react-select'
import { useTheme } from '../context/ThemeContext'
interface Option {
  value: string
  label: string
}

interface SortBarProps {
  sortOption: string
  setSortOption: (value: string) => void
}

const SortBar: React.FC<SortBarProps> = ({ sortOption, setSortOption }) => {
  const { theme } = useTheme()
  const sortOptions: Option[] = useMemo(() => {
    return [
      { value: 'none', label: 'No sort' },
      { value: 'nameAsc', label: 'Name Ascending' },
      { value: 'nameDesc', label: 'Name Descending' },
      { value: 'premierAsc', label: 'Premier Date Ascending' },
      { value: 'premierDesc', label: 'Premier Date Descending' },
    ]
  }, [])

  return (
    <div className={styles.sort}>
      <ReactSelect
        styles={getCustomSelectStyles(theme)}
        options={sortOptions}
        value={sortOptions.find((option) => option.value === sortOption)}
        onChange={(option) => setSortOption(option?.value || 'none')}
        placeholder="Sort by"
        isClearable={false}
      />
    </div>
  )
}

export default SortBar
