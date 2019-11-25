const initialState = {
    filterResult: []
  };
  
  export default function filterReducer(state = initialState, action){
    switch (action.type) {
      case 'SET_FILTER':
          return {
            ...state,
            filterResult: action.filter
          };
      default:
        return state;
    }
  };