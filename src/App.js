// Module displays a left sidebar and another component in the main column.
// State will be current user and current family

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AddPost from "./addpost/AddPost";
import AddCategory from "./sidebar/addcategory/AddCategory";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";

class App extends Component {
  state = {
    categories: [],
    newEmail: "",
    newPassword: "",
    currentUser: 1
  };

  // handleSubmit = (event, category) => {
  //   console.log(category)
  //   this.setState({
  //     created: new Date()
  //   });
  //   event.preventDefault();

  //   this.setState({ categories: [...this.state.categories, category] })
  // };

  componentDidMount() {
    fetch("http://localhost:5001/categorys", {
      method: "GET"
    })
      .then(r => r.json())
      .then(thing => {
        console.log(thing);
      });
  }

  // Set Username/password field to newly created username and password
  setUsernamePassword = (newUsername, newPassword) => {
    this.setState({
      newEmail: newUsername,
      newPassword: newPassword
    });
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
              exact path="/"
              render = {props => (
                <Login
                newEmail={this.state.newEmail}
                newPassword={this.state.newPassword}
                />
              )}
            />
            <Route path="/register" component={Register} />
            <Route
              path="/home"
              render={props => 
              this.state.currentUser ? (
              <Home categories={this.state.categories} />
            ) : (
              <Redirect
          to={{
            pathname: "/",
          }}
        />
            )
              }
            />
            <Route path="/gallery" component={Gallery} />
            <Route
              path="/addcategory"
              render={props => (
                <AddCategory
                // handleSubmit={this.handleSubmit}
                />
              )}
            />

            <Route path="/addpost" component={AddPost} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
