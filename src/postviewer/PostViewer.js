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
<span class="gallerypostviewer__caption">{this.props.post.caption}</span> <span class="gallerypostviewer__date">Posted on {this.props.post.date}</span>
        </div>
      </div>
    );
  }
}

export default PostViewer;
