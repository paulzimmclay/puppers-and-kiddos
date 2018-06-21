// Add New Image Post will allow a user to add a new image for a single category

import React, { Component } from "react";
import apiURL from "../../../DB";
import "./AddNewStoryPost.css";
import { withRouter } from "react-router-dom";
import moment from "moment"

class AddNewStoryPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      childname: ""
    };
  }

  handleCaptionChange = event => {
    this.setState({ caption: event.target.value });
  };

  // Find name of child by getting ID from URL, then checking against categories in props from app
  // Need to pass categories from app.js

  getCategoryName = () => {
    let childArray = this.props.categories.find((category) => {
      console.log(category[1])
      return category[1] === +this.props.match.params.categoryid
    })
    this.setState({
      childname: childArray[0]
    })
  }

  submitStoryPostForm = event => {
    event.preventDefault();
    fetch(`${apiURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        family: this.props.currentUserFamilyId,
        caption: this.state.caption,
        image: "",
        category: +this.props.match.params.categoryid,
        date: moment().format("MMMM D, YYYY")
      })
    }).then(() => this.props.history.push("/"));
  };

componentDidMount() {
  this.getCategoryName()
}

  render() {
    return (
      <div className="story__container">
        <form className="story__form" onSubmit={this.submitStoryPostForm}>
          <textarea
          placeholder={`Write a short story about ${this.state.childname}.`}
            className="addnewstorypost__textarea"
            value={this.state.caption}
            onChange={this.handleCaptionChange}
          />

          <input className="story__submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(AddNewStoryPost);
