import React, { Component } from 'react';
import GalleryPost from './gallerypost/GalleryPost';
import './Gallery.css'


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [
        "thing1",
        "thing2",
        "thing3",
        "thing4",
        "thing5",
        "thing6",
        "thing7"
      ]
     }
  }
  render() { 
    return ( 
      <div className="gallery__container">
        {this.state.posts.map((post) => {
          return <GalleryPost post={post}/>
        })}
      </div>
     )
  }
}
 
export default Gallery;