import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App />
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
    </Provider>,
    document.getElementById("root")
);