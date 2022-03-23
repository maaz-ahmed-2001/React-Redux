//    This is the root reducer file. All reducers are imported here because only one reducer is acceptable by redux store.


import changeNum from "./addSub";
import { combineReducers } from "redux";  // This will combine all imported reducers together.
const rootReducer = combineReducers({ // it is a function and takes an object as a param
    changeNum,          //  in this object we provide all the reducers imported to use globaly
    //changeBg etc.
})

export default rootReducer;