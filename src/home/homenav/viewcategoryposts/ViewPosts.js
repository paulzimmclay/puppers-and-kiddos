import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom'

class ViewCategoryPosts extends Component {
  state = {}
  render() { 
    return ( 
      <Link to='/addpost'><div className="homenav__button homenav__view">Viewerrrr</div></Link>
     )
  }
}
 
export default ViewCategoryPosts;