// Add New Image Post will allow a user to add a new image for a single category

import React, { Component } from "react";
import apiURL from '../../../DB'

class AddNewStoryPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
    };
  }

  /* "child": 1,
  "image": "http://stjamesjc.org/wp-content/uploads/2012/05/St.-James-the-Greater-400x498.jpg",
  "text": "My son at work",
  "created": "date",
  "user": "1" */


  handleCaptionChange = event => {
    this.setState({ caption: event.target.value });
  };

  submitImagePostForm = event => {
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
        family: this.props.currentUserFamilyId,
        category: +this.props.match.params.categoryid,
        date: new Date()

      })
    }).then((r) => console.log(r));
    
  };

  render() {
    return (
      <form onSubmit={this.submitImagePostForm}>
        <label>
          Story:
          <textarea
            value={this.state.caption}
            onChange={this.handleCaptionChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddNewStoryPost;
