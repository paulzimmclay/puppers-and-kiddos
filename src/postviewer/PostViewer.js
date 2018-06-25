import React, { Component } from 'react';
import './PostViewer.css'

class PostViewer extends Component {
  render() { 
    return ( 
      <div className="gallerypostviewer__container">
        <img src={this.props.post.image} height="100%"/>
        {this.props.post.caption}
      </div>
     )
  }
}
 
export default PostViewer;