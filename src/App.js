import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        {/* <Route path="/hats" component={HatsPage}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
