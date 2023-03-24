import React, { useState, useEffect } from 'react';
import s from './Form.module.css'

export const Form = ({ create }) => {
    const [post, setPost] = useState(
        { title: '', body: '' }
    )
    const [isFormFilled, setIsFormFilled] = useState(false);
    useEffect(() => {
        setIsFormFilled(post.title !== '' && post.body !== '');
    }, [post]);

    const addNewPost = () => {
        const newPost = { ...post }
        create(newPost)
        setPost({ title: '', body: '' });
        setIsFormFilled(false);
    }
    return (
        <>
            <form>
                <input value={post.title} onChange={(e) =>
                    setPost({ ...post, title: e.target.value })}></input>
                <input value={post.body} onChange={(e) =>
                    setPost({ ...post, body: e.target.value })}></input>
                <button
                    disabled={!isFormFilled}
                    className={s.convex}
                    type='button'
                    onClick={addNewPost}>
                    ADD
                </button>
            </form>
        </>
    )
}

