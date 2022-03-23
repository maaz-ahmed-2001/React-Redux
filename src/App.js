import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import {add,dec} from "./redux/actions/index"

// actions are imported where they are needed.
// useSelector() is required to change the state. It takes current state as param then returns the updated state.
// useDipatch()  is required to trigger the import functions from actions.

function App() {
  const myState = useSelector((state)=>state.changeNum)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Increment Decrement app</h1>
        <h2>Redux Practice</h2>
        <button onClick={()=>dispatch(add())} >+</button>
        <span>{myState}</span>
        <button onClick={()=>dispatch(dec())}>-</button>
      </div>
    </>
  );
}

export default App;
