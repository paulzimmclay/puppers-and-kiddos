import React, { Component } from "react";
import "./Gallery.css";
import apiURL from "../DB";
import GalleryImagePost from "./gallerypost/GalleryImagePost";
import GalleryStoryPost from "./gallerypost/GalleryStoryPost";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  // Wrap component did mount in function, call for both cdm, cdu

  postFinder = () => {
    let apiPosts = "";
    if (
      this.props.match.params.family === "all" &&
      this.props.match.params.category === "all"
    ) {
      apiPosts = "posts";
    } else if (this.props.match.params.category === "all") {
      apiPosts = `posts?family=${this.props.match.params.family}`;
    } else {
      apiPosts = `posts?family=${this.props.match.params.family}&category=${
        this.props.match.params.category
      }`;
    }
    fetch(`${apiURL}/${apiPosts}`)
      .then(r => r.json())
      .then(r => {
        this.setState({
          posts: r
        });
      });
  };

  componentDidMount() {
    this.postFinder();
  }

  render() {
    return (
      <div className="gallery__container">
        {this.state.posts.map(post => {
          return (post.image ? <GalleryImagePost key={post.id} post={post}/> : <GalleryStoryPost key={post.id} post={post} />)
          })}
      </div>
    );
  }
}

export default Gallery;
