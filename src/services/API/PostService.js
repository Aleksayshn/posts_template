import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export default class PostService {

    static async getPosts(limit = 5, page = 1) {
        const response = await axios.get('posts', {
            params: { _limit: limit, _page: page }
        })
        return response;
    }

    static async getPostById({ params: { id } }) {
        const { data } = await axios.get('posts/' + id)
        return data;
    }

    static async getPostComment({ params: { id } }) {
        const { data } = await axios.get(`posts/${id}/comments`)
        return data;
    }
}



