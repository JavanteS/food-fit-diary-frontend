
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

        case "ADDING_MEAL":

        return {
            ...state, loading: true
        }

        case "MEAL_ADDED":

        return {
            ...state, meals: [...state.meals, action.payload],
            loading: false
        }
            

        default:
            return state
    }
}