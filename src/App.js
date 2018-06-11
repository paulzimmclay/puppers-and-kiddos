import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <nav>
          <Sidebar />
        </nav>

        <main>
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
