import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import s from './Item.module.css'

export const Item = React.forwardRef(({ post, deleter, dataIndex, key }, ref) => {
    const router = useLocation();
    return (
        <li className={s.item} data-index={dataIndex} key={key} ref={ref} >
            <div >
                <p>{post.title}:</p>
                <p>{post.body}</p>
            </div>
            <div className={s.boxBtn}>
                <Link to={`${router.pathname}/${post.id}`}>Open</Link>
                <button
                    className={s.removeBtn}
                    type="button"
                    onClick={() => {
                        deleter(post);
                    }}
                >
                    Delete
                </button></div>
        </li>
    )
})
