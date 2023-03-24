import { nanoid } from 'nanoid';
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const CommentPage = () => {
    const comments = useLoaderData();
    return (
        <ul>
            {comments.map(comment => <li key={nanoid()}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
            </li>
            )}
        </ul>
    )
}
