import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import appReducer from "./store/pocket.reducer";
import App from "./App";

import "./index.scss";

const appState = createStore(appReducer);

ReactDOM.render(
    <Provider store={appState}>
        <App />
    </Provider>,
    document.getElementById("root")
);