import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/products/:productsName" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
