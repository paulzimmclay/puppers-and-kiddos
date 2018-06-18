import React, { Component } from 'react';
import GalleryPost from './gallerypost/GalleryPost';
import './Gallery.css'
import apiURL from '../DB'


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [1, 2, 3]
     }
  }

// getGalleryUrl = () => {
//   if (this.props.match.params.family !== "any" && ) {
//     return 
//   } else if (true) {
//     return 
//   } else {
//     return 
//   }
// }

//   componentDidMount() {
    
//   }

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