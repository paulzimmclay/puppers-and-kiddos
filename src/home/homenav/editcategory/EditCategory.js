// EditCategory will display a form that allows the user to edit an exsting column, or delete it

import React, { Component } from "react";
import apiURL from "../../../DB";
import { withRouter } from 'react-router-dom'

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      created: ""
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.categoryid
    })
  }

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  // submitMyForm = event => {
  //   event.preventDefault();
  //   console.log("submit")
  //   fetch(`${apiURL}/categorys`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       category: this.state.category,
  //       family: this.props.currentUserFamilyId
  //     })
  //   }).then(() => this.props.categoryUpdate());
  // };

  deleteButtonClick = () => {
    // deleteCategory function, which is on App, to delete the category
    this.props.deleteCategory(this.props.match.params.categoryid)
    this.props.history.push(
      '/'
    )
  }

  

  render() {
    return (
      <div className="editcategory__container">
      <form onSubmit={this.submitMyForm}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.category}
            onChange={this.handleCategoryChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <button
          className="editcategory__deletecategory"
          onClick={this.deleteButtonClick}
        >
          Delete Category
        </button>
      </div>
    );
  }
}

export default withRouter(EditCategory)
