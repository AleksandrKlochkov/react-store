const initialState = {
    product: {},
    loading: false,
    error: ''
}

export default function productReducer(state=initialState, action){
    switch (action.type) {
        case 'FETCH_PRODUCT_START': 
            return {
                ...state, loading: true
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state, loading: false, product: action.product
            }
        case 'FETCH_PRODUCT_NOT_EXIS':
            return {
                ...state
            }
        case 'FETCH_PRODUCT_ERROR': 
            return{
                ...state, error: action.error
            }
        default: 
            return state
    }
}