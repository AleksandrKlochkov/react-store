import {ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_CART_NOT_EXIST, ADD_TO_CART_ERROR, FETCH_CART_SUCCESS} from './actionsTypes'


export function fetchCart() {
    return dispatch => {
            const items = JSON.parse(localStorage.getItem('cart')) || []
            dispatch(fecthCartSuccess(items))
    }
}

export function addToCart(id) {
    return async dispatch => {
        await fetch(`http://localhost:5000/products/${id}`)
              .then(response => response.json())
              .then(product => {
                  if(Object.keys(product).length>0){
                    const {id, title, price} = product
                    const item = {id, title, price}
                    dispatch(addCart(item))
                  }else{
                    dispatch(addToCartNotExist())
                  }
              })
              .catch(error => {
                  console.log(error)
              })
    }
}

export function removeItemCart(id){
    return dispatch => {
        dispatch(removeFromCart(id))
    }
}

export const addCart = item => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))

    return {
        type: ADD_TO_CART,
        item
    }
}
  
export const removeFromCart = id => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const items = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(items))
    
    return {
        type: REMOVE_FROM_CART,
        id,
    }
}

export const addToCartNotExist = () => ({
    type: ADD_TO_CART_NOT_EXIST
})

export const addToCartError = error => ({
    type: ADD_TO_CART_ERROR,
    error
})

export const fecthCartSuccess = (items) => ({
    type: FETCH_CART_SUCCESS,
    items
})
  