import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
