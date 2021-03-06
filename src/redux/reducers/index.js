import { combineReducers } from "redux";
import { productReducer } from "./productReducers";


const rootReducer = combineReducers({
    allProducts : productReducer
})

export default rootReducer;