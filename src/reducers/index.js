import {combineReducers} from "redux"
import mealReducer from "./mealReducer"

const rootReducers = combineReducers({
    mealReducer,
    exerciseReducer
})

export default rootReducers;