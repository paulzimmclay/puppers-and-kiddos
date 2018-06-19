import React, { Component } from 'react';
import './GalleryStoryPost.css'

class GalleryStoryPost extends Component {
  render() { 
    return ( 
      <div className="gallerystorypost__container">
        
        <div className="gallerystorypost__captioncontainer">
          <h3 className="gallerystorypost__caption">{this.props.post.caption}</h3>
        </div>
      </div>
     )
  }
}
 
export default GalleryStoryPost;
