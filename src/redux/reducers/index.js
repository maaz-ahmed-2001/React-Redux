import changeNum from "./addSub";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeNum,
    //changeBg etc.
})

export default rootReducer;