import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        {/* <Route path="/create" component={RecipeCreate}/> */}
        {/* <Route path="*" component={Error404} />{" "} */}
        {/*ver si funciona teniendo un nav entodas las rutas */}
      </Switch>
    </div>
  );
}

export default App;
