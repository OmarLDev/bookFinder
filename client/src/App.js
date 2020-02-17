import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper />
        {/* <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/search" component={Form} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
