// on mount, load current user info into state, set as default for form
// on submit, update current state into current user info
// logout option that purges session storage and loads /

import React, { Component } from "react";
import "./Settings.css";
import { withRouter } from 'react-router-dom'

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      family: "",
      image: ""
    };

  }

  firstnameChange = (event) => {
    this.setState({ firstname: event.target.value });
  }

  lastnameChange = (event) => {
    this.setState({ lastname: event.target.value });
  }
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  imageChange = (event) => {
    this.setState({ image: event.target.value });
  }

  familyChange = (event) => {
    this.setState({ family: event.target.value });
  }

  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    // Prevent form from clearing every time submitted
    event.preventDefault();

    // Store submitted values into variables
    const submittedFirstname = this.state.firstname;
    const submittedLastname = this.state.lastname;
    const submittedEmail = this.state.email;
    const submittedPassword = this.state.password;
    const submittedImageUrl = this.state.image;
    const submittedFamily = this.state.family;

    fetch(`http://localhost:5001/users?email=${submittedEmail}`)
      // Must be explicit on how to parse the response
      .then(r => r.json())

      // JSON parsed data comes to this then()
      .then(user => {
        // Convert user to string to get undefined if empty (instead of empty array)
        if (user.toString()) {
          document
            .getElementById("emailExistsAlert")
            .removeAttribute("class", "emailexists");

          // if doesn't exist, add to user db and forward to login page, passing email/password
        } else {
          fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              first: submittedFirstname,
            last: submittedLastname,
            email: submittedEmail,
            password: submittedPassword,
            family: submittedFamily
            })
          });
          this.props.setUsernamePassword(submittedEmail, submittedPassword)
          this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            image: '',
            location: ''
          });
          console.log()
          // Redirect to Login
          this.props.history.push(
            '/'
          )
        }
      });
  }

  render() {
    return (
      <div className="formDiv">
        <form onSubmit={this.handleSubmit} className="form-login">
        <h1 className="h3 mb-3 font-weight-normal">Register to use Puppers 'n' Kiddos:</h1>
            
            <input className="form-control"
            placeholder="First Name"
              type="text"
              value={this.state.firstname}
              onChange={this.firstnameChange}
            />
            <input className="form-control"
              type="text"
              placeholder="Last name"
              value={this.state.lastname}
              onChange={this.lastnameChange}
            />
            <input className="form-control"
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.emailChange}
            />
            <input className="form-control"
            placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.passwordChange}
            />
            <select value={this.state.family} onChange={this.familyChange} className="form-control">
              <option defaultValue="">Location:</option>
              <option value={0}>Zimmerman-Clayton (Nashville)</option>
              <option value={1}>Zimmerman-Clayton (New Providence)</option>
              <option value={2}>ZC/Pini</option>
              <option value={3}>Eichelberger</option>
              <option value={4}>McKenzie</option>
              <option value={5}>Gordon</option>
            </select>
          <input type="submit" value="Submit" className="btn btn-lg btn-info btn-block"/>
          <div id="emailExistsAlert" className="emailexists">
          <p>That email address already exists. Click here to log in.</p>
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Settings);