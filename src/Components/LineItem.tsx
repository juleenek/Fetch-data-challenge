import { User } from '../Types/User';
import { Post } from '../Types/Post';
import { Comment } from '../Types/Comment';

type Props = {
  item: string;
};

export const LineItem: React.FC<Props> = ({ item }) => {
  return (
    <li className='item'>
      <label>{item}</label>
    </li>
  );
};
