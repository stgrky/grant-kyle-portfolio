import React from "react";
import "./App.css";
import About from "./Components/About";
import Projects from "./Components/Projects";
// import Blog from './Components/Blog';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path='/blog' component={Blog} />  */}
      </div>
    </Router>
  );
}

export default App;
