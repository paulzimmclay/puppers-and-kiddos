// AddCategory will display a form that allows the user to create a new column on the home page

import React, { Component } from "react";
import apiURL from '../../../DB'

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      created: ""
    }
  }

  componentDidMount () {
    const id = this.props.match.params.categoryid

    fetch(`${apiURL}/categorys/${id}`, {
      method: "DELETE"
    }

    )
      .then((id) => {
        this.setState(() => ({ id }))
      })
  }

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
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
    }).then(() => this.props.categoryUpdate());
    
  };

deleteCategory = () => {
  fetch(`${apiURL}/categorys/${this.url}`)
  .then((category) => {
    console.log(category)
  })
}

  render() {
    return (
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
        <button className="editcategory__deletecategory" onClick={this.deleteCategory}>Delete Category</button>
      </form>
    );
  }
}

export default EditCategory;
