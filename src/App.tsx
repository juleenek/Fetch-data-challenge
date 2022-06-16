import { useState, useEffect } from 'react';
import { Content } from './Components/Content';
import { Navigation } from './Components/Navigation';

function App() {
  const API_USERS = 'https://jsonplaceholder.typicode.com/users';
  const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';
  const API_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';

  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState('users');

  useEffect(() => {
    const fetchItems = async (API_URL: string) => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not received expected data.');
        const listItems = await response.json();
        setItems(listItems);
        // setFetchError(null);
      } catch (error) {
        // setFetchError((error as Error).message);
      } finally {
        // setIsLoading(false);
      }
    };
    if(page === 'users') (async () => await fetchItems(API_USERS))();
    if(page === 'posts') (async () => await fetchItems(API_POSTS))();
    if(page === 'comments') (async () => await fetchItems(API_COMMENTS))();
  });

  return (
    <div className='App'>
      <Navigation page={page} setPage={setPage} />
      <main>
        <Content items={items} />
      </main>
    </div>
  );
}

export default App;
