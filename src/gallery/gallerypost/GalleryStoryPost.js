import React, { Component } from 'react';
import './GalleryStoryPost.css'
import { Link } from 'react-router-dom'

class GalleryStoryPost extends Component {
  
  viewerLink = `/viewer/${this.props.family}/${this.props.category}/${this.props.post.id}`
  render() { 
    return ( 
      <Link className="gallerystorypost__container" to={this.viewerLink}>
      <div >
        
        <div className="gallerystorypost__captioncontainer">
          <h3 className="gallerystorypost__caption">{this.props.post.caption}</h3>
          <h5 className="gallerystorypost__date">Posted on {this.props.post.date}</h5>
        </div>
      </div>
      </Link>
     )
  }
}
 
export default GalleryStoryPost;
