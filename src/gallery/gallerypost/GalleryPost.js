import React, { Component } from 'react';
import './GalleryPost.css'

class GalleryPost extends Component {
  render() { 
    return ( 
      <div className="item" key={this.props.key}>
      {this.props.post.caption}
      </div>
     )
  }
}
 
export default GalleryPost;
