import React, { Component } from 'react';
import './GalleryPost.css'

class GalleryPost extends Component {
  render() { 
    return ( 
      <div className="item">{this.props.post}</div>
     )
  }
}
 
export default GalleryPost;
