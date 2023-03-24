import React from 'react'
import s from './Find.module.css'
export const Find = ({ ...props }) => {
    return (
        <input {...props} className={s.findInput}></input>
    )
}
