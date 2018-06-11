import React, { Component } from "react";
import "./Homenav.css";
import AddNewPost from "./addnewpost/AddNewPost";
import ViewCategoryPosts from "./viewcategoryposts/ViewPosts";
import EditCategory from "./editcategory/EditCategory";

class Homenav extends Component {
  render() {
    return (
      <div className="homenav__container">
        {console.log(this.props.index)}
        <h1 className="homenav__name">{this.props.categories}</h1>
        <AddNewPost />
        <ViewCategoryPosts />
        <EditCategory />
      </div>
    );
  }
}

export default Homenav;
