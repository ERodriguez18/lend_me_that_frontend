import React from 'react';
import { Link } from 'react-router-dom';

function ShelfCard({ shelf }) {
  return <p><Link to={{ pathname: `/shelves/${shelf.id}/items` }}>{shelf.user.name}</Link></p>
}

export default ShelfCard;