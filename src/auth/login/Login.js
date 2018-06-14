import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  // eventhandler for username field
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  // eventhandler for password field
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  
  // eventhandler for submit button
  submitLoginForm = event => {
    event.preventDefault();
    fetch("http://localhost:5001/users")
      .then(r => r.json())
      .then(users => {
        // user is an array of objects, each of which is a user
       console.log(users)
        if ( users.find(user => {
          user.email === this.state.username
        })) {
          console.log("paul")
        } else {
          // Create user in API
          fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
          })
            // Set local storage with newly created user's id and show home view
            .then(newUser => {
              this.props.setActiveUser(newUser.id);
              this.props.showView("home");
            });
        }
      });
  };

  render() {
    return (
      // form that allows for login with exisitng username and password
      // username field
      // password field
      // submit button
      <form onSubmit={this.submitLoginForm}>
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <Link to='/register'><button className="register">Register</button></Link>
      </form>
    );
  }
}

export default Login;
