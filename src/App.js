// Module displays a left sidebar and another component in the main column.
// State will be current user and current family

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AddCategory from "./sidebar/addcategory/AddCategory";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Settings from "./sidebar/settings/Settings";
import apiURL from "./DB";
import EditCategory from "./home/homenav/editcategory/EditCategory";
import AddNewImagePost from "./home/homenav/addnewimagepost/AddNewImagePost";
import AddNewStoryPost from "./home/homenav/addnewstorypost/AddNewStoryPost";

class App extends Component {
  state = {
    categories: [],
    currentUserId: "",
    currentUserFamilyId: 0
  };

  // Handles user login. Used as props on Login.js.
  userLogin = () => {
    // Get ID from local storage (set on Login.js), set to state
    const userId = parseInt(localStorage.getItem("userId"));
    this.setState({
      currentUserId: userId
    });
    // Use ID from local storage to get user info, load to state
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
        this.categoryUpdate();
      });
  };

  // Uses current user's family ID to get a list of that family's categories to render on Home.js
  categoryUpdate = () => {
    fetch(`${apiURL}/categorys?family=${this.state.currentUserFamilyId}`)
      .then(r => r.json())
      .then(categories => categories.map(item => [item.category, item.id]))
      .then(categoryArray => {
        this.setState({
          categories: categoryArray
        });
      });
  };

logoutStateChange = () => {
  this.setState({
    currentUserId: 0
  })
}

  componentDidMount() {
    this.userLogin();
  }

  deleteCategory = catId => {
    fetch(`${apiURL}/categorys/${catId}`, {
      method: "DELETE"
    }).then(() => {
      this.categoryUpdate();
    });
  };

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
            <Sidebar currentUserFamilyId={this.state.currentUserFamilyId}/>
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
                  <Home 
                  currentUserFamilyId={this.state.currentUserFamilyId}
                  categories={this.state.categories} />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/gallery/:family/:category"
              render={props =>
                this.state.currentUserId ? (
                  <Gallery
                    {...props}
                    key={Date.now()}
                    currentUserFamilyId={this.state.currentUserFamilyId}
                  />
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
              path="/editcategory/:categoryid"
              render={props =>
                this.state.currentUserId ? (
                  <EditCategory
                    // {...props}
                    currentUserFamilyId={this.state.currentUserFamilyId}
                    categoryUpdate={this.categoryUpdate}
                    deleteCategory={this.deleteCategory}
                    categories={this.state.categories}
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
                  <Settings 
                  logoutStateChange={this.logoutStateChange}
                  />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/addnewimagepost/:categoryid"
              render={props =>
                this.state.currentUserId ? (
                  <AddNewImagePost
                    {...props}
                    currentUserFamilyId={this.state.currentUserFamilyId}
                  />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
            <Route
              path="/addnewstorypost/:categoryid"
              render={props =>
                this.state.currentUserId ? (
                  <AddNewStoryPost
                    {...props}
                    currentUserFamilyId={this.state.currentUserFamilyId}
                    categories={this.state.categories}
                  />
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
