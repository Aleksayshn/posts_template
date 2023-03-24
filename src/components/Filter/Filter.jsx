import React from 'react'
import { Find } from '../Find/Find'
import { Select } from '../Select/Select'
import s from './Filter.module.css'

export const Filter = ({ filter, setFilter }) => {
    return (
        <div className={s.filterWrap}>
            <Find
                placeholder='Find...'
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            >
            </Find>
            <Select
                value={filter.sort}
                onChange={e => setFilter({ ...filter, sort: e })}
                defaultValue='Sort'
                options={[
                    { value: 'title', name: 'By name' },
                    { value: 'body', name: 'By describe' },
                ]}
            ></Select>
        </div>
    )
}
