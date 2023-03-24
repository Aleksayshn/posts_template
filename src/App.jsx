import './App.css';
import React, { useState, useEffect, createRef, useRef } from 'react';
import { nanoid } from 'nanoid'
import PostService from './services/API/PostService';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import { getPageCount } from './utils/pagesCount';
import { Container } from './components/Container/Container';
import { Loader } from './components/Loader/Loader';
import { ModalRoot } from './components/ModalRoot/ModalRoot';
import { Modal } from './components/Modal/Modal';
import { Form } from './components/Form/Form';
import { List } from './components/List/List';
import { Filter } from './components/Filter/Filter';
import { PrimeButton } from './components/PrimeButton/PrimeButton';
import { Pagination } from './components/Pagination/Pagination';
import { Select } from './components/Select/Select';

const App = () => {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const searchedPosts = usePosts(posts, filter.sort, filter.query)

  // const lastElement = useRef(); for infinity scroll

  const [fetchPosts, isLoading, error] = useFetching(async (limit, page) => {
    const response = await PostService.getPosts(limit, page)
    const pagePosts = response.data.map((post) => ({
      ...post,
      nodeRef: createRef()
    }));
    setPosts(() => [...pagePosts]);

    const totalCountPost = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCountPost, limit))
  })

  // useObserver(lastElement, page < totalPages, isLoading, () => {
  //   setPage(page + 1);
  // })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit])


  const createPost = (newPost) => {
    setPosts([{
      ...newPost,
      id: nanoid(),
      nodeRef: createRef()
    }, ...posts])
    setModal(false);
  }

  const deletePosts = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <Container>
      <PrimeButton onClick={() => setModal(true)} text='Create'></PrimeButton>
      <ModalRoot>
        <Modal visible={modal} setVisible={setModal}>
          <Form create={createPost} />
        </Modal>
      </ModalRoot>

      <Filter filter={filter} setFilter={setFilter} />
      <Select
        value={limit}
        onChange={setLimit}
        // defaultValue='Amount'
        options={[
          { value: 5, name: 'Amount' },
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: -1, name: 'All' },
        ]}
      ></Select>

      {error &&
        <h1>Something  wrong... ${error}</h1>
      }
      {isLoading
        ? <Loader />
        : <>
          <Pagination
            totalPages={totalPages}
            page={page}
            changePage={changePage}
          />
          <List posts={searchedPosts} deleter={deletePosts} />
        </>
      }
      {/* <div ref={lastElement} style={{ height: 5, background: 'black' }} /> */}

    </Container>
  )
}

export default App;
