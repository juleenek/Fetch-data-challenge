import { useState, useEffect } from 'react';
import { Content } from './Components/Content';
import { Table } from './Components/Table/Table';
import { Navigation } from './Components/Navigation';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState('users');
  const [fetchError, setFetchError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${page}`);
        if (!response.ok) throw Error('Did not received expected data.');
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (error) {
        setFetchError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  },[page]);

  return (
    <div className='App'>
      <Navigation page={page} setPage={setPage} />
      <main>
        {isLoading && <p></p>}
        {fetchError && <p className='error'>{`Error: ${fetchError}`}</p>}
        {/* {!fetchError && !isLoading && <Content items={items} />} */}
        {!fetchError && !isLoading && <Table items={items} />}
      </main>
    </div>
  );
}

export default App;
