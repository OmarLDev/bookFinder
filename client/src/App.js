import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Form from "./components/Form";

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/search" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
