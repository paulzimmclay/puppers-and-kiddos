import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import { BrowserRouter, Route} from "react-router-dom";
import AddPost from "./addpost/AddPost";
import AddCategory from "./sidebar/addcategory/AddCategory";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app__container">
          {/* Grid CSS Nav */}
          <nav>
            <Sidebar />
          </nav>

          {/* GridCSS "Main", will contain either Login, Home, a form, or Gallery */}
          <main>
            <Route path="/home" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/addcategory" component={AddCategory} />
            <Route path="/addpost" component={AddPost} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
