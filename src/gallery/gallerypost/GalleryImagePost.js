import React, { Component } from "react";
import "./GalleryImagePost.css";

class GalleryImagePost extends Component {
  render() {
    return (
      <div className="galleryimagepost__container">
        <div className="galleryimagepost__imagecontainer">
          <img className="galleryimagepost__image" src={this.props.post.image} alt="a post"/>
        </div>
        <div className="galleryimagepost__captioncontainer">
          <h3 className="galleryimagepost__caption">{this.props.post.caption}</h3>
        </div>
      </div>
    );
  }
}

export default GalleryImagePost;
