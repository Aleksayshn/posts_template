import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../../Container/Container'
import s from './Header.module.css'

export const Header = () => {

    return (
        <header>
            <Container>
                <nav>
                    <ul className={s.navItem}>
                        <li>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/all">All Posts</NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
