import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="app__container">
        
        {/* Grid CSS Nav */}
        <nav>
          <Sidebar />
        </nav>

        {/* GridCSS "Main", will contain either Login, Home, a form, or Gallery */}
        <main>
          <Route path="/gallery" component={Gallery} />
          <Route path="/home" component={Home} />
          
        </main>

      </div>
      </Router>
    );
  }
}

export default App;
