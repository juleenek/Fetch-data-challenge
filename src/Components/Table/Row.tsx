import { User } from '../../Types/User';
import { Post } from '../../Types/Post';
import { Comment } from '../../Types/Comment';
import { Cell } from './Cell';
import React from 'react';

type Props = {
  item: User | Post | Comment;
};

export const Row: React.FC<Props> = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};
