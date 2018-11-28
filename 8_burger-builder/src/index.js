import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import App from "./App";
import "./index.css";
import burgerReducer from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  burgerBuilder: burgerReducer,
  order: orderReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
