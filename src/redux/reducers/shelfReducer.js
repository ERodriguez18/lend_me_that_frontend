export default function shelfReducer(
    state = {
      shelves: [],
      items: [],
      item: [],
      loading: true
    },
    action
  ) {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          shelves: [],
          loading: true
        };
      case "GET_SHELVES":
        console.log(action.payload, "get_shelves");
        return {
          ...state,
          shelves: action.payload,
          loading: false
        };
      case "GET_SHELF_ITEMS":
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case "GET_ITEM":
        return {
          ...state,
          item: action.payload,
          loading: false
        };
      case "GET_USER_SHELF_ITEMS":
        console.log(action.payload, "get_user_shelf_items");
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case "ADD_ITEM_TO_SHELF":
        return {
          ...state,
          items: action.payload,
          loading: false
        };
      case "UPDATE_ITEM":
        return {
          ...state,
          item: action.payload,
          loading: false
        };
      case "DELETE_ITEM_FROM_SHELF":
        const items = state.items.filter(item => item.id !== action.payload.id);
        return {
          items
        };
      default:
        return state;
    }
  }