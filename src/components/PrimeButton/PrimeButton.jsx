import React from 'react'
import s from './PrimeButton.module.css'
export const PrimeButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={s.primeBtn}>
            {text}
        </button>
    )
}
