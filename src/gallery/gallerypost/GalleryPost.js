import React, { Component } from 'react';

class GalleryPost extends Component {
  render() { 
    return ( 
      <div className="item">x{this.props.post}</div>
     )
  }
}
 
export default GalleryPost;
