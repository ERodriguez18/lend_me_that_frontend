const API_URL = process.env.REACT_APP_API_URL;

export function getCart(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items`)
      .then(response => response.json())
      .then(items => {
        dispatch({ type: 'GET_CART', payload: items })
      }
    )
  }
}

export function addItemToCart(id, item) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(response => response.json())
      .then(item => dispatch({ type: 'ADD_ITEM_TO_CART', payload: item })
      )
  }
}


export function removeItemFromCart(id, item_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items/${item_id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from: 'cart'})
    })
    .then(response => response.json())
    .then(item => dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item })
  )}
}