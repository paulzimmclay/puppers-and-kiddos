import React, { Component } from 'react';
import './GalleryStoryPost.css'

class GalleryStoryPost extends Component {
  render() { 
    return ( 
      <div className="item" key={this.props.key}>
      {this.props.post.caption}
      </div>
     )
  }
}
 
export default GalleryStoryPost;
