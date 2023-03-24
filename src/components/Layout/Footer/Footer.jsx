import { Container } from '../../Container/Container';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <p className={s.footerText}>
                    © {new Date().getFullYear()} MyPosts App.{' '}
                    <span>All rights reserved.</span>
                </p>
            </Container>
        </footer>
    );
};