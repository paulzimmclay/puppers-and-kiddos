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
  
  indexURL = "/editcategory/" + this.props.categories[1]
  
  render() {
    return (
      <div className="homenav__container">
        <h1 className="homenav__name">{this.props.categories[0]}</h1>
        <AddNewPost />
        <ViewCategoryPosts />
        <Link className="homenav__button homenav__edit" to={this.indexURL}>
          Edit
        </Link>
      </div>
    );
  }
}

export default Homenav;


// Onclick on Edit div passes Index in HomeNav to App.js, sets to state, then passes to Edit CAtegory button