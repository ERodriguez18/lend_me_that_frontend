import React from 'react';
import CartCard from './CartCard';

const CartList = ({ cart, removeItem, user_id }) => {
    return cart.map(item => {
      if (item.shelf_id !== user_id) {
        return <CartCard key={item.id} item={item} removeItem={removeItem} />
      }
  })
}

export default CartList;