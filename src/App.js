// Module displays a left sidebar and another component in the main column. 
// State will be current user and current family

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
  state = {
    categories: ["James", "Penny", "Scout", "Pencil"]
  }

  handleSubmit = event => {
    console.log(event)
    this.setState({
      created: new Date()
    });
    event.preventDefault();

    // Need to figure out how to get 'new value' to instead be the Name passed from AddCategory (is it being passed?)
    this.setState({ categories: [...this.state.categories, 'new value'] })
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app__container">
          {/* Grid CSS Nav contains left sidebar with 4 buttons */}
          <nav>
            <Sidebar />
          </nav>

          {/* GridCSS "Main", will contain either Login, Home, a form, or Gallery */}
          <main>
            <Route 
              path="/home" 
              render={
                (props) => <Home categories={this.state.categories}/> 
              } />
            <Route path="/gallery" component={Gallery} />
            <Route 
              path='/addcategory' 
              render={
                (props) => <AddCategory handleSubmit={this.handleSubmit}/> 
              } />
            
            <Route path="/addpost" component={AddPost} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
