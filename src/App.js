import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Aboutpage from "./components/about";

function App() {
  return (
    <div>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/about" component={Aboutpage}></Route>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
