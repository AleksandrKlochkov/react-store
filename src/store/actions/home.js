import {FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './actionsTypes'

export function fetchProducts() {
    return async dispatch => {
        dispatch(fetchProductsStart())
        await fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(products => {
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            dispatch(fetchProductsError(error))
        })
    }
}

export const fetchProductsStart = () => ({
    type: FETCH_PRODUCTS_START
})

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products
})

export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    error
})


