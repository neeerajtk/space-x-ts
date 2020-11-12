import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
