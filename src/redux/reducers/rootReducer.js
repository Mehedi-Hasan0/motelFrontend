import { combineReducers } from "redux";
import handleUser from "../reducers/userReducer";
import houseReducer from "../reducers/houseReducer";

const rootReducer = combineReducers({
    user: handleUser,
    house: houseReducer
})

export default rootReducer;