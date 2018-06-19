// This component renders a title and three child component, each of which is a button in the home page

import React, { Component } from "react";
import "./Homenav.css";
import AddNewImagePost from "./addnewimagepost/AddNewImagePost";
import ViewCategoryPosts from "./viewcategoryposts/ViewPosts";
import EditCategory from "./editcategory/EditCategory";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class Homenav extends Component {
  
  render() {
    return (
      <div className="homenav__container" key={this.props.key}>
        <h1 className="homenav__name">{this.props.categories[0]}</h1>
        <div className="homenav__add_container">
        <Link className="homenav__add_button homenav__button" to={`/addnewimagepost/${this.props.categories[1]}`}>New Picture</Link>
        <Link className="homenav__add_button homenav__button" to={`/addnewstorypost/${this.props.categories[1]}`}>New Story</Link>
        </div>
        <Link to={`/gallery/${this.props.currentUserFamilyId}/${this.props.categories[1]}`} className="homenav__button">View Posts</Link>
        <Link className="homenav__button homenav__edit" to={`/editcategory/${this.props.categories[1]}`}>
          Edit
        </Link>
      </div>
    );
  }
}

export default Homenav;


// Onclick on Edit div passes Index in HomeNav to App.js, sets to state, then passes to Edit CAtegory button