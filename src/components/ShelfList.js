import React from 'react';
import ShelfCard from './ShelfCard';

const ShelfList = ({ shelves, user_id }) => {
  if(!shelves) {
    return <div>Loading...</div>
  } else {
    return shelves.map(shelf => {
      if (shelf.user.id !== user_id) {
        return <ShelfCard key={shelf.id} shelf={shelf} />
      }
    })
  } 
}

export default ShelfList;