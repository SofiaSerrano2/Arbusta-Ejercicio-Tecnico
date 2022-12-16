import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import userReducer from "./reducer/userReducer.js";
import { createStore, combineReducers } from 'redux';
import { Provider ,useSelector } from 'react-redux' ;


const reducer = combineReducers({
  user: userReducer,
})
const store = createStore(reducer);
console.log(store.getState())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
