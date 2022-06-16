type Props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export const Navigation: React.FC<Props> = ({page, setPage}) => {
  return (
    <nav>
      <button onClick={() => setPage('users')}>Users</button>
      <button onClick={() => setPage('posts')}>Posts</button>
      <button onClick={() => setPage('comments')}>Comments</button>
    </nav>
  );
};
