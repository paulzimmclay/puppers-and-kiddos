import React, { Component } from "react";
import "./GalleryImagePost.css";
import { Link } from "react-router-dom"

class GalleryImagePost extends Component {
  viewerLink = `/viewer/${this.props.family}/${this.props.category}/${this.props.post.id}`
  render() {
    return (
      <Link className="gallerystorypost__container" to={this.viewerLink}>
        <div className="galleryimagepost__imagecontainer">
          <img className="galleryimagepost__image" src={this.props.post.image} alt="a post"/>
        </div>
        <div className="galleryimagepost__captioncontainer">
          <h3 className="galleryimagepost__caption">{this.props.post.caption}</h3>
          <h5 className="galleryimagepost__date">Posted on {this.props.post.date}</h5>
        </div>
      </Link>
    );
  }
}

export default GalleryImagePost;
