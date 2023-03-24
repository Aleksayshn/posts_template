import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Item } from '../Item/Item';
import s from './List.module.css'

export const List = ({ posts, deleter }) => {
    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                No find!
            </h1>
        )
    }

    return (
        <div className={s.container}>
            <ul>
                <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="item"
                            nodeRef={post.nodeRef}
                        >
                            <Item
                                ref={post.nodeRef}
                                key={post.id}
                                post={post}
                                dataIndex={index + 1}
                                deleter={deleter} />
                        </CSSTransition>
                    )}

                </TransitionGroup>
            </ul>
        </div>
    );
}

