import { User } from '../../Types/User';
import { Post } from '../../Types/Post';
import { Comment } from '../../Types/Comment';
import { Row } from './Row';
import React from 'react';

type Props = {
  items: User[] | Post[] | Comment[];
};

export const Table: React.FC<Props> = ({ items }) => {
  return (
    <div className='table-container'>
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
