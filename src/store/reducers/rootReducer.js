import {combineReducers} from 'redux'
import homeReducer from './home'
import productReducer from './product'
import cartReducer from './cart'
import filterReducer from './filter'

export default combineReducers({
    home: homeReducer,
    product: productReducer,
    cart: cartReducer,
    filter: filterReducer
})