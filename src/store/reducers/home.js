const initialState = {
    products: [],
    loading: false,
    error: ''
}

export default function homeReducer(state=initialState, action){
    switch (action.type) {
        case 'FETCH_PRODUCTS_START': 
            return {
                ...state, loading: true
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state, loading: false, products: action.products
            }
        case 'FETCH_PRODUCTS_ERROR':
                return {
                    ...state, loading: false, error: action.error
                }
        default: 
            return state
    }
}

