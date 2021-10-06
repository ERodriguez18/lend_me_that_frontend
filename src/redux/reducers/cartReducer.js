export default function cartReducer(state = {
    cart: [],
    items: [],
    item: [],
    loading: true
  }, action) {
    switch (action.type) {
      case 'LOADING':
        return {
          ...state,
          cart: [],
          items: [],
          loading: true
        }
      case 'GET_CART':
        return {
          ...state, 
          items: action.payload,
          loading: false
        }
      case 'ADD_ITEM_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          loading: false
        }
      case 'REMOVE_ITEM_FROM_CART':
        return {
          ...state,
          items: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }