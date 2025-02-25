import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from '../styles/styles.module.scss'
import classNames from 'classnames'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      containerClassName={classNames(styles.pagination, styles.customContainer)}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      activeClassName={styles.active}
      previousClassName={styles.previous}
      nextClassName={styles.next}
      breakClassName={styles.break}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      forcePage={currentPage - 1}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      previousLabel={null}
      nextLabel={null}
    />
  )
}

export default Pagination
