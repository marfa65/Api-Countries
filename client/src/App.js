import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import Detail from "./components/Detail.jsx";
import ActivityCreate from "./components/ActivityCreate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/activityCreate" component={ActivityCreate} />
        <Route
          path="/detail/:id"
          render={({ match }) => <Detail id={match.params.id} />}
        />
      </Switch>
    </div>
  );
}

export default App;
