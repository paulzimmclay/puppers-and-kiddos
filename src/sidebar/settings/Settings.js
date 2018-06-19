// on mount, load current user info into state, set as default for form
// on submit, update current state into current user info
// logout option that purges session storage and loads /

import React, { Component } from "react"
import "./Settings.css"
import { withRouter } from "react-router-dom"
import apiURL from '../../DB'
import './Settings.css'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      family: 0,
      image: ""
    }
  }
  
  
  componentDidMount() {
    const userId = parseInt(localStorage.getItem("userId"))
    // grab user info, set to state
    fetch(`${apiURL}/users?id=${userId}`)
      .then(r => r.json())
      .then(user => {
        this.setState({
          firstname: user[0].firstname,
          lastname: user[0].lastname,
          email: user[0].email,
          family: user[0].family,
          password: user[0].password
        })
      })
  }

  firstnameChange = event => {
    this.setState({ firstname: event.target.value })
  }

  lastnameChange = event => {
    this.setState({ lastname: event.target.value })
  }
  emailChange = event => {
    this.setState({ email: event.target.value })
  }

  familyChange = event => {
    this.setState({ family: event.target.value })
  }

  passwordChange = event => {
    this.setState({ password: event.target.value })
  }

  // Handle submit should update the current user, alert user that settings have been updated, then redirect to home
  handleSubmit = event => {
    // Prevent form from clearing every time submitted
    event.preventDefault()
    // Get userId from local storage
    const userId = parseInt(localStorage.getItem("userId"))
    // Store submitted values into variables
    
    const submittedFirstname = this.state.firstname
    const submittedLastname = this.state.lastname
    const submittedEmail = this.state.email
    const submittedPassword = this.state.password
    const submittedFamily = this.state.family

    const changedInfo = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      family: +this.state.family
    }

    console.log(changedInfo)
    fetch(`${apiURL}/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(changedInfo),
      headers:{
            'Content-Type': 'application/json'
          }
    })
    .then(r => r.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
      
  }
      

  logout = () => {
    // remove local storage
    localStorage.removeItem("userId")
      this.props.history.push("/")
    // redirect to /
    
  }

  render() {
    return (
      <div className="settings__container">
        <form onSubmit={this.handleSubmit} className="settings__form">
          <h1 className="settings__banner">
            Edit your user settings:
          </h1>

          <input
            className="settings__firstname"
            placeholder="First Name"
            type="text"
            value={this.state.firstname}
            onChange={this.firstnameChange}
          />
          <input
            className="settings__lastname"
            type="text"
            placeholder="Last name"
            value={this.state.lastname}
            onChange={this.lastnameChange}
          />
          <input
            className="settings__email"
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={this.emailChange}
          />
          <input
            className="settings__password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.passwordChange}
          />
          <select
            value={this.state.family}
            onChange={this.familyChange}
            className="settings__family"
          >
            <option defaultValue="">Location:</option>
            <option value={0}>Zimmerman-Clayton (Nashville)</option>
            <option value={1}>Zimmerman-Clayton (New Providence)</option>
            <option value={2}>ZC/Pini</option>
            <option value={3}>Eichelberger</option>
            <option value={4}>McKenzie</option>
            <option value={5}>Gordon</option>
          </select>
          <input
          className="settings__submit"
            type="submit"
            value="Submit"
          />
          <button className="settings__logout" onClick={this.logout}>Log out</button>
        </form>
      </div>
    )
  }
  }

export default withRouter(Settings)