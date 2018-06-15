// This component renders a title and three child component, each of which is a button in the home page

import React, { Component } from "react";
import "./Homenav.css";
import AddNewPost from "./addnewpost/AddNewPost";
import ViewCategoryPosts from "./viewcategoryposts/ViewPosts";
import EditCategory from "./editcategory/EditCategory";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import AddPost from "../../addpost/AddPost";

class Homenav extends Component {
  render() {
    return (
      <div className="homenav__container">
        <h1 className="homenav__name">{this.props.categories}</h1>
        <AddNewPost />
        <ViewCategoryPosts />
        <Link className="homenav__button homenav__edit" to="/editcategory">
          Edit
        </Link>
        <Router>
          <Route path="/addpost" component={AddPost} />
        </Router>
      </div>
    );
  }
}

export default Homenav;
