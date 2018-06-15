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
import Settings from "./sidebar/settings/Settings";

class App extends Component {
  state = {
    categories: [],
    currentUserId: ""
  };

  userLogin = () => {
    // get id from local storage,
    const userId = parseInt(localStorage.getItem("userId"));
    this.setState({
      currentUserId: userId
    });
    // use to check vs DB to retrieve user info
    fetch(`http://localhost:5001/users?id=${userId}`)
      .then(r => r.json())
      .then(user => {
        this.setState({
          currentUserFirstName: user[0].firstname,
          currentUserLastName: user[0].firstname,
          currentUserFamilyId: user[0].family
        });
        return user[0].family;
      })
      .then(id => {
        fetch(`http://localhost:5001/categorys?family=${id}`)
          .then(r => r.json())
          .then(categories => categories.map(item => item.category))
          .then(categoryArray => {
            this.setState({
              categories: categoryArray
            });
          });
      });
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
    this.userLogin();
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
              exact
              path="/"
              render={props =>
                this.state.currentUserId ? (
                  <Redirect to={"/home"} />
                ) : (
                  <Login
                    newEmail={this.state.newEmail}
                    newPassword={this.state.newPassword}
                    userLogin={this.userLogin}
                  />
                )
              }
            />
            <Route path="/register" component={Register} />
            <Route
              path="/home"
              render={props =>
                this.state.currentUserId ? (
                  <Home categories={this.state.categories} />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
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
            <Route 
              path="/settings" 
              render={props => (
              <Settings 
                email={this.state.email}
                currentUserFirstName={this.state.currentUserFirstName}
                currentUserLastName={this.state.currentUserLastName}
                currentUserFamilyId={this.state.currentUserFamilyId}
              />
              )} 
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
