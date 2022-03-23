import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import {add,dec} from "./redux/actions/index"

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
