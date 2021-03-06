import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store"
import {Provider} from "react-redux"

//  Provider is required to provide the access to store. It takes store as a prop.

store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

