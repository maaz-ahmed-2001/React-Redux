//     This is the redux centralized store.
//     The root reducer is imported here and store is initialized

import rootReducer from "./reducers";
import { createStore } from "redux";


//    We provide root reducer in createStore() function as first param.
//    The second param is optional and is used for Redux DevTools.


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;