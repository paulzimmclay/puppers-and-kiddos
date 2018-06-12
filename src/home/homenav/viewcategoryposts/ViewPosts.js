// This is the button to view posts by a category. 
// For props it should take the category ID passed down from the Homenav to use as a filter

import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom'

class ViewCategoryPosts extends Component {
  state = {}
  render() { 
    return ( 
      <Link className="homenav__button homenav__view" to='/addpost'>Viewerrrr</Link>
     )
  }
}
 
export default ViewCategoryPosts;