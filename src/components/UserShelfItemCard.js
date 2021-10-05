import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteItemFromShelf } from '../redux/actions/shelf';

function UserShelfItemCard({ item, deleteItemFromShelf }) {

  function handleSubmit(event) {
    event.preventDefault();
    deleteItemFromShelf(item.shelf_id, item)
  }

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.rented ? 'Unavailable' : 'Available'}</p>
      <button><Link to={{ pathname: `/editItem` , state: item}}>Edit</Link></button>
      <button onClick={handleSubmit}>delete</button>
    </div>
  )
}

export default connect(null, { deleteItemFromShelf })(UserShelfItemCard);