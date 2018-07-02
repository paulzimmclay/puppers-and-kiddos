// AddCategory will display a form that allows the user to create a new column on the home page

import React, { Component } from "react";
import apiURL from '../../DB'
import './AddCategory.css'
import { withRouter } from "react-router-dom";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      image: "",
      created: ""
    };
  }

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };
  handleImageChange = event => {
    this.setState({ image: event.target.value });
  };

  submitMyForm = event => {
    event.preventDefault();
    fetch(`${apiURL}/categorys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: this.state.category,
        family: this.props.currentUserFamilyId
      })
    }).then(() => this.props.categoryUpdate())
    .then(() => this.props.history.push("/"));
    
  };

  render() {
    return (
      <div className="addcategory__container">
      <form className="addcategory__form" onSubmit={this.submitMyForm}>
        <h2 className="addcategory__banner">Add a new category here:</h2>
        <label className="addcategory__banner">
          Name of kid or pet:
          <input
          className="addcategory__category"
            type="text"
            value={this.state.category}
            onChange={this.handleCategoryChange}
          />
        </label>
        {/* <label>
          Image:
          <input
            type="text"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </label> */}
        <input className="addcategory__submit" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default withRouter(AddCategory);