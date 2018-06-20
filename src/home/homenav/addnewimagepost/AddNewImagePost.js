// Add New Image Post will allow a user to add a new image for a single category

import React, { Component } from "react";
import apiURL from "../../../DB";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "tychdmns";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/df1kli6hv/upload";

class AddNewImagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      image: "",
      uploadedFileCloudinaryUrl: ""
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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
        family: this.props.currentUserFamilyId,
        caption: this.state.caption,
        image: this.state.uploadedFileCloudinaryUrl,
        family: this.props.currentUserFamilyId,
        category: +this.props.match.params.categoryid,
        date: new Date()
      })
    }).then(r => console.log(r));
  };

  render() {
    return (
      <div className="addnewimagepost__container">
        <form onSubmit={this.submitImagePostForm}>
          <label>
            Image:
            <input
              type="text"
              value={this.state.image}
              onChange={this.handleImageChange}
            />
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}
            >
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
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
        <div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
        </div>}
      </div>
      </div>
    );
  }
}

export default AddNewImagePost;
