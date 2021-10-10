import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { store, persistor } = ConfigureStore();
// 1) create the store and sets the rootReducer as the main store reducer
// the root reducer maps and combines all the project's reducers in one reducer
// 2) thunk halts the distpach, performs async function and resumes the dispatch when done
// thunk is the middleware between the reducer and dispatch action

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
