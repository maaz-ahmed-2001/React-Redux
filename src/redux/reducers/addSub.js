//    This file defines how to perform the functions triggered from actions file
//    We use simple switch cases here and also initialize the state first so it works smoothly


const initialState = 0

const changeNum = (state = initialState,action)=>{  // in first param we provide the above initialized state && in second param we provide the action to be perform
    switch(action.type){  // in switch we provide the type of the action
        case "ADD":
            return state + 1;
        case "DEC":
            return state - 1;
        default:
            return state;
    }
}

export default changeNum