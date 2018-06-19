// EditCategory will display a form that allows the user to edit an exsting column, or delete it

import React, { Component } from "react";
import apiURL from "../../../DB";
import { withRouter } from "react-router-dom";
import "./EditCategory.css";

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      created: "",
      childname: ""
    };
  }

  componentDidMount() {
    this.getCategoryName()
    this.setState({
      id: this.props.match.params.categoryid
    });
  }

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  getCategoryName = () => {
    let childArray = this.props.categories.find((category) => {
      return category[1] === +this.props.match.params.categoryid
    })
    this.setState({
      category: childArray[0]
    })
  }

  deleteButtonClick = () => {
    // deleteCategory function, which is on App, to delete the category
    // window.confirm("Are you sure you want to delete this category?")
    this.props.deleteCategory(this.props.match.params.categoryid);
    this.props.history.push("/");
  };


  render() {
    return (
      <div className="editcategory__container">
        <form className="editcategory__form" onSubmit={this.submitMyForm}>
          <label>
            Name:
            <input
              className="editcategory__category"
              type="text"
              value={this.state.category}
              onChange={this.handleCategoryChange}
            />
          </label>
          <input className="editcategory__submit" type="submit" value="Submit" />
          <button
            className="editcategory__delete"
            onClick={this.deleteButtonClick}
          >
            Delete Category
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditCategory);
