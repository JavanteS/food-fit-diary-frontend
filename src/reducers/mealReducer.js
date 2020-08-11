
export default (state ={ 
    meals: [], loading: false
}, action) =>{
    switch(action.type){


        case "LOADING_MEALS":

        return {
            ...state, loading: true
        }

        case "MEALS_LOADED":

        return {
            ...state, meals: action.payload,
            loading: false
        }
            

        default:
            return state
    }
}