// Click on a particular gallery post will link to PostViewerContainer, passing that post's category and ID
// Post cateogry and ID will be used to load from DB into state

// This module will contain an array of posts that will be passed to the PostViewer, plus
// Eventhandlers that will allow for arrow navigation between posts.

// Arrow keys to go forward and back, escape returns to gallery

import React, { Component } from "react";
import apiURL from "../DB";

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
      })
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
        {/* <PostViewer /> */}
        {/* use current ID (this.props.match.params.id) to find curent post by ID */}
        {this.state.posts
        .filter(item => {
          console.log(item.id, this.props.match.params.post)
          return +item.id === +this.props.match.params.post;

        })
        .map(post => {
          return <p>{post.caption}</p>
        })
      }

        {/* <p className="test">test</p> */}
      </div>
    );
  }
}

export default PostViewerContainer;
