import {User} from '../../Types/User'
import {Post} from '../../Types/Post'
import {Comment} from '../../Types/Comment'
import { LineItem } from './LineItem';

type Props  = {
  items: User[] | Post[] | Comment[] 
}

export const ItemList: React.FC<Props> = ({items}) => {
  return<ul>
  {items.map((item) => (
    <LineItem
      key={item.id}
      item={JSON.stringify(item)}
    />
  ))}
</ul>;
};
