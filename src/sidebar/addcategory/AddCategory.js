// AddCategory will display a form that allows the user to create a new column on the home page

import React, { Component } from "react";

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



  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.category}
            onChange={this.handleCategoryChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddCategory;
