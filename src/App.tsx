import { useState, useEffect } from 'react';
import { Content } from './Components/Content';
import { Navigation } from './Components/Navigation';

function App() {
  const API_USERS = 'https://jsonplaceholder.typicode.com/users';
  const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';
  const API_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';

  const [page, setPage] = useState('users');

  return <div className='App'>
    <Navigation/>
    <main>
      <Content/>
    </main>
  </div>;
}

export default App;
