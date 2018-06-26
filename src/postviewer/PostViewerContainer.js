// Click on a particular gallery post will link to PostViewerContainer, passing that post's category and ID
// Post cateogry and ID will be used to load from DB into state

// This module will contain an array of posts that will be passed to the PostViewer, plus
// Eventhandlers that will allow for arrow navigation between posts.

// Arrow keys to go forward and back, escape returns to gallery

import React, { Component } from "react";
import apiURL from "../DB";
import PostViewer from "./PostViewer";
import "./PostViewerContainer.css";
import GalleryImagePost from "../gallery/gallerypost/GalleryImagePost";
import StoryPostViewer from "./StoryPostViewer";

class PostViewerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: 0
    };
  }

  componentDidMount() {
    this.postFinder();
  }

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
    // .then(r => {
    //   this.setState({
    //     currentPost: this.state.posts[+this.props.match.params.post]
    //   });
    // });
  };

  // displayedPostFinder = id => this.state.posts[id]

  render() {
    return (
      //Grid for Pictures, plus arrows for nav
      <div className="postviewercontainer__container">
        {/*  */}
        {/* use current ID (this.props.match.params.id) to find curent post by ID */}
        {this.state.posts
          .filter(item => {
            return +item.id === +this.props.match.params.post;
          })
          .map(post => {
            return post.image ? (
              <PostViewer className="postviewer__component" post={post} />
            ) : (
              <StoryPostViewer post={post} />
            );
            // return <GalleryImagePost className="gallerypostviewer__container" post={post}/>
          })}
      </div>
    );
  }
}

export default PostViewerContainer;
