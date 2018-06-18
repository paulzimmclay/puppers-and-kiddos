import React, { Component } from "react";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="addpost__form">
        <form>
          <input type="text" className="caption" />
        </form>
      </div>
    );
  }
}

export default AddPost;
