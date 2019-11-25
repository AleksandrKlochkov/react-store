const initialState = {
    items: [],
    error: ''
}

export default function cartReducer(state = initialState, action){
    switch (action.type) {
      case 'FETCH_CART_SUCCESS':
        if(action.items.length>0){
          return {
            ...state, items: action.items
          }
        }else{
          return {
            ...state, items: [...state.items]
          }
        }
       
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.item]
        }
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(o => o.id !== action.id)
        }
      case 'ADD_TO_CART_NOT_EXIST':
          return {
            ...state
          }
      case 'ADD_TO_CART_ERROR':
          return {
            ...state, error: action.error
          }
      default:
        return state
    }
  }