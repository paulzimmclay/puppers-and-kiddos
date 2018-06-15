import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // eventhandler for username field
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
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
        const submittedInfo = users.find(
          user => user.email === this.state.email
        );

        // user is an array of objects, each of which is a user
        if (submittedInfo) {
          if (submittedInfo.password === this.state.password) {
            localStorage.setItem("userId", submittedInfo.id);
            this.props.userLogin();
            this.props.history.push("/home");
          } else {
            alert("sorry, wrong password");
          }
        } else {
          alert("sorry, we didn't recognize that username");
        }
      });
  };

  render() {
    return (
      // form that allows for login with exisitng email and password
      // username field
      // password field
      // submit button
      <form onSubmit={this.submitLoginForm}>
        <h1 className="login__banner">Please Login:</h1>
          <input
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        <input type="submit" value="Submit" />
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </form>
    );
  }
}

export default withRouter(Login);
