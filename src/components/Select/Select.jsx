import React from 'react'
import s from './Select.module.css'

export const Select = ({ options, defaultValue, value, onChange }) => {
    return (
        <select className={s.select}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map((opt) =>
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            )}
        </select>)
}
