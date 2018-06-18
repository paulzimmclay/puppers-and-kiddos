// Add New Image Post will allow a user to add a new image for a single category

import React, { Component } from "react";
import apiURL from '../../../DB'

class AddNewImagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      image: "",
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
  handleImageChange = event => {
    this.setState({ image: event.target.value });
  };

  submitImagePostForm = event => {
    event.preventDefault();
    fetch(`${apiURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        caption: this.state.caption,
        image: this.state.image,
        family: this.props.currentUserFamilyId,
        category: +this.props.match.params.categoryid

      })
    }).then((r) => console.log(r));
    
  };

  render() {
    return (
      <form onSubmit={this.submitImagePostForm}>
        <label>
          Image:
          <input
            type="text"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </label>
        <label>
          Caption:
          <input
            type="text"
            value={this.state.caption}
            onChange={this.handleCaptionChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddNewImagePost;
