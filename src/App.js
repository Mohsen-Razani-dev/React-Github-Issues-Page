import React from "react";
import IssuesLayout from "./Component/IssuesLayout";
import { Route, Switch } from "react-router-dom";
import IssuesPageNavBar from "./Component/IssuesPageNavBar";

function App() {
  return (
    <div className="App">
      <IssuesPageNavBar />
      <IssuesLayout />
    </div>
  );
}

export default App;
