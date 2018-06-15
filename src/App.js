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
import apiURL from './DB'
import EditCategory from './home/homenav/editcategory/EditCategory'

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
    fetch(`${apiURL}/users?id=${userId}`)
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
        this.categoryUpdate()
          });
      
  };

  categoryUpdate = () => {
    fetch(`${apiURL}/categorys?family=${this.state.currentUserFamilyId}`)
          .then(r => r.json())
          .then(categories => categories.map(item => item.category))
          .then(categoryArray => {
            console.log(categoryArray)
            this.setState({
              categories: categoryArray
            });
          });
  }

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

  addPostId = (id) => {
    this.setState({
      categoryId: id
    })
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
                localStorage.getItem("userId") ? (
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
            <Route
              path="/gallery"
              render={props =>
                this.state.currentUserId ? (
                  <Gallery />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/addcategory"
              render={props =>
                this.state.currentUserId ? (
                  <AddCategory 
                  currentUserFamilyId={this.state.currentUserFamilyId}
                  categoryUpdate={this.categoryUpdate}
                  />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/editcategory"
              render={props =>
                this.state.currentUserId ? (
                  <EditCategory
                  currentUserFamilyId={this.state.currentUserFamilyId}
                  categoryUpdate={this.categoryUpdate}
                  />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/settings"
              render={props =>
                this.state.currentUserId ? (
                  <Settings />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/addpost"
              render={props =>
                this.state.currentUserId ? (
                  <AddPost />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
