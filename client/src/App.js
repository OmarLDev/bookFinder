import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route exact path="/search" component={Wrapper} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
