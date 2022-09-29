//import Example1 from "./components/InfiniteScroll/InfiniteScrollExample1"
//import Example2 from "./components/InfiniteScroll/InfiniteScrollExample2"
import { getPosts } from './api/axios_search'
import { useState, useEffect } from 'react'

import SearchBar from "./components/SearchBar/SearchBar"
import ListPage from './components/SearchBar/ListPage'


function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  );
};

export default App