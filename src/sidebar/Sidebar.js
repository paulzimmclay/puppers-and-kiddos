// Sidebar provides navigation for the app, including 4 buttons

import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyLink: ``
    };
  }

  render() {
    return (
      <div className="sidebar__container">
        <Link to="/home" className="sidebar__button sidebar__home_button sidebar__link">
          Home
        </Link>
        <Link to="/addcategory" className="sidebar__button sidebar__add_button sidebar__link">
          Add
        </Link>
        <div className="sidebar__viewall_container">
          <Link className="sidebar__viewall_button sidebar__link sidebar__button" to={`/gallery/${this.props.currentUserFamilyId}/all`}>
            This Family
          </Link>
          <Link className="sidebar__viewall_button sidebar__link sidebar__button" to="/gallery/all/all">All Posts</Link>
        </div>
        <Link
          to="/settings"
          className="sidebar__button sidebar__settings_button sidebar__link"
        >
          Settings
        </Link>
      </div>
    );
  }
}

export default Sidebar;
