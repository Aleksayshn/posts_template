import React from 'react'
import { nanoid } from 'nanoid'
import { usePagination } from '../../hooks/usePagination';
import s from './Pagination.module.css'

export const Pagination = ({ totalPages, changePage, page }) => {
    const [pagesArray] = usePagination(totalPages)

    return (
        <div className={s.paginationBox}>
            {pagesArray.map(p =>
                <button
                    key={nanoid()}
                    type='button'
                    onClick={() => changePage(p)}
                    className={`
                    ${s.pageBtn} ${page === p
                            ? s.pageBtn__current
                            : ''}
                        `}>
                    {p}
                </button>
            )}
        </div>
    )
}
