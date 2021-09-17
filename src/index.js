import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/RootReducer";
import thunk from 'redux-thunk'


// 1) create the store and sets the rootReducer as the main store reducer
// the root reducer maps and combines all the project's reducers in one reducer
// 2) thunk halts the distpach, performs async function and resumes the dispatch when done
// thunk is the middleware between the reducer and dispatch action
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
