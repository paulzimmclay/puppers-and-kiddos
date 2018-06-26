import React, { Component } from "react";
import "./StoryPostViewer.css";

class StoryPostViewer extends Component {
  render() {
    return (
      <div className="storypostviewer__container">
        <div className="storypostviewer__captioncontainer">
<span class="storypostviewer__caption">{this.props.post.caption}</span> <span class="storypostviewer__date">Posted on {this.props.post.date}</span>
        </div>
      </div>
    );
  }
}

export default StoryPostViewer;
