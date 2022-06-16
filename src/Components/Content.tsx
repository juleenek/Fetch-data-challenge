import {User} from '../Types/User'
import {Post} from '../Types/Post'
import {Comment} from '../Types/Comment'
import { ItemList } from './ItemList';
import React from 'react';

type Props  = {
  items: User[] | Post[] | Comment[] 
}

export const Content: React.FC<Props>  = ({items}) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items} 
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Empty!</p>
      )}
    </>
  );
};
