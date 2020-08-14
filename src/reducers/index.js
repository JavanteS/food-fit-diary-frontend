import {combineReducers} from "redux"
import mealReducer from "./mealReducer"
import exerciseReducer from "./exercisereducer"

const rootReducers = combineReducers({
    mealReducer,
    exerciseReducer
})

export default rootReducers;