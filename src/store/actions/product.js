import {FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_NOT_EXIS, FETCH_PRODUCT_ERROR} from './actionsTypes'

export function fetchProduct(id, ownProps) {
    return async dispatch => {
        dispatch(fetchProductStart())
        await fetch(`http://localhost:5000/products/${id}`)
              .then(response => response.json())
              .then(product => {
                  if(Object.keys(product).length > 0){
                    dispatch(fetchProductSuccess(product))
                  }else{
                    ownProps.history.push('/')
                    dispatch(fetchProductNotExis())
                  }
              })
              .catch(error => {
                 dispatch(fetchProductError(error))
              })
    }
}

export const fetchProductStart = () => {
    return {
        type: FETCH_PRODUCT_START
    }
}

export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        product
    }
}

export const fetchProductNotExis = () => {
    return {
        type: FETCH_PRODUCT_NOT_EXIS
    }
}

export const fetchProductError = (error) => {
    return {
        type: FETCH_PRODUCT_ERROR,
        error
    }
}

