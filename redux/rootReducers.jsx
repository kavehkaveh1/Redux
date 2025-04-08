import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/usersReducer";
const rootReducers= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user: userReducer
})
export default rootReducers