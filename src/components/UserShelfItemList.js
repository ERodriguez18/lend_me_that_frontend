import React from 'react';
import UserShelfItemCard from './UserShelfItemCard'

const UserShelfItemList = ({ items }) => {
  return items.map(item => {
    return <UserShelfItemCard key={item.id} item={item} />
  })
}

export default UserShelfItemList;