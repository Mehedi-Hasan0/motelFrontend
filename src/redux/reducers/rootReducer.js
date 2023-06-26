import { combineReducers } from "redux";
import handleUser from "../reducers/userReducer";

const rootReducer = combineReducers({
    user: handleUser
})

export default rootReducer;