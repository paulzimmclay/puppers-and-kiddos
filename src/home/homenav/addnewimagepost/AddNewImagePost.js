// Add New Image Post will allow a user to add a new image for a single category

import React, { Component } from "react";
import apiURL from "../../../DB";
import Dropzone from "react-dropzone";
import request from "superagent";
import "./AddNewImagePost.css";
import { withRouter } from "react-router-dom";
import moment from "moment"

// Cloudinary settings:
// Preset corresponds to cloudinary preset settings, specifically autorotate and resizing on upload
const CLOUDINARY_UPLOAD_PRESET = "tychdmns";
// Endpoint to send pictures when uploaded
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/df1kli6hv/upload";

class AddNewImagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      uploadedFileCloudinaryUrl: ""
    };
  }

  onImageDrop = files => {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  };

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      // Returns with url of image that is set to storage, uploaded to DB in submitImagePostForm()
      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

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
        image: this.state.uploadedFileCloudinaryUrl,
        category: +this.props.match.params.categoryid,
        date: moment().format("MMMM D, YYYY")
      })
    }).then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div className="image__container">
        <form className="image__form" onSubmit={this.submitImagePostForm}>
          {/* Renders a Div that allows for drag/drop of a single image file */}
          <h3 className="image__banner">
            Drop an image below, or click the box to select a file to upload.
          </h3>
          <Dropzone
          
            className="image__dropzone"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}
          />

          <input
            type="text"
            className="image__caption"
            placeholder="Give your picture a caption!"
            value={this.state.caption}
            onChange={this.handleCaptionChange}
          />
          <input className="image__submit" type="submit" value="Submit" />
          <img alt="example" width="100%" src={this.state.uploadedFileCloudinaryUrl} />
        </form>
      </div>
    );
  }
}

export default withRouter(AddNewImagePost)
