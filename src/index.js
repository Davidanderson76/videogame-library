import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux setup
import { createStore, applyMiddleware, compose } from "redux";

//applyMiddleware
//checks on every action being dispatched whatever is in applymiddleware will be run

//Composes single-argument functions from right to left.
//The rightmost function can take multiple arguments as it
//provides the signature for the resulting composite function.

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
