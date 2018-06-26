import React, { Component } from "react";
import "./PostViewer.css";

class PostViewer extends Component {
  render() {
    return (
      <div className="gallerypostviewer__container">
        <div className="gallerypostviewer__imagecontainer">
          <img
            className="gallerypostviewer__image"
            src={this.props.post.image}
          />
        </div>
        <div className="gallerypostviewer__captioncontainer">
          <p className="gallerypostviewer__caption">{this.props.post.caption}</p>
        </div>
      </div>
    );
  }
}

export default PostViewer;
