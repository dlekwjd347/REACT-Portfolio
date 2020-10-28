import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact={true} path="/portfolio">
          <Portfolio />
        </Route>
      </Router>
    </div>
  );
}

export default App;
