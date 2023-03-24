import { Link, Outlet, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { Container } from '../components/Container/Container';
import { GoBack } from '../components/GoBack/GoBack';
import { Loader } from '../components/Loader/Loader';

export const PostIdPage = () => {
    const { title, body } = useLoaderData();
    const { state } = useNavigation();
    const params = useParams()
    return (
        <Container>
            <GoBack />
            <h2>Page of post ID = {params.id}</h2>
            {state === 'loading' && <Loader />}
            <Link className='titlePostId' to={'comments'}>
                <h3>{title}</h3>
            </Link>
            <p>{body}</p>
            <Outlet />
        </Container>
    );
};