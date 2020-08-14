export default (state ={ 
    exercises: [], loading: false
}, action) =>{
    switch(action.type){


        case "LOADING_EXERCISES":

        return {
            ...state, loading: true
        }

        case "EXERCISES_LOADED":

        return {
            ...state, exercises: action.payload,
            loading: false
        }

        case "ADDING_EXERCISE":

        return {
            ...state, loading: true
        }

        case "EXERCISE_ADDED":

        return {
            ...state, exercises: [...state.exercises, action.payload],
            loading: false
        }

        case "DELETING_EXERCISE":

        return {
            ...state, loading: true
        }

        case "EXERCISE_DELETED":

        return {
            ...state, exercises: [...state.exercises.filter(exercise => `${exercise.id}` !== action.payload)],
            loading: false
        }
            

        default:
            return state
    }
}