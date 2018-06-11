import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";

class App extends Component {
  render() {
    return (
      <div className="app__container">
        
        {/* Grid CSS Nav */}
        <nav>
          <Sidebar />
        </nav>

        {/* GridCSS "Main", will contain either Login, Home, a form, or Gallery */}
        <main>
          {/* <Home /> */}
          <Gallery />
        </main>

      </div>
    );
  }
}

export default App;
