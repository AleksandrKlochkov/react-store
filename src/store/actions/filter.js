import { SET_FILTER} from './actionsTypes'

export function searchFilter(products, searchQuery, ownProps){
    return dispatch => {
        const filter = products.filter(
            o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.category.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
        )
        ownProps.history.push('/search')
        dispatch(setFilter(filter))
    }
   
}

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

