import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import apiURL from "../../DB";

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
    fetch(`${apiURL}/users`)
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
      <div className="login__container">
        <form className="login__form" onSubmit={this.submitLoginForm}>
          <h1 className="login__banner">Welcome to Puppers 'n' Kiddos!</h1>
          <h2 className="login__banner">Please Login:</h2>
          <input
            className="login__email"
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            className="login__password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input className="login__submit" type="submit" value="Submit" />
          <Link to="/register">
            <button className="login__register">Register</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
