import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { PostsPage } from './pages/PostsPage';
import { ErrorPage } from './pages/ErrorPage';
import { PostIdPage } from './pages/PostIdPage';
import PostService from './services/API/PostService';
import { CommentPage } from './pages/CommentPage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: 'all',
                    element: <PostsPage />,
                },

                {
                    path: 'all/:id',
                    element: <PostIdPage />,
                    loader: PostService.getPostById,


                    children: [
                        {
                            path: 'comments',
                            element: <CommentPage />,
                            loader: PostService.getPostComment,
                        },
                    ],

                }

            ],
        },
    ],
    { basename: "/posts_template" }
);