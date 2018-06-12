// Sidebar provides navigation for the app, including 4 buttons

import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="sidebar__container">
          <Link to='/home'  className="sidebar__button sidebar__home_button">Home</Link>
          <Link to='/addcategory'  className="sidebar__button sidebar__add_button">Add</Link>
          <Link to='/gallery'  className="sidebar__button sidebar__viewall_button">
            View All
          </Link>
          <div className="sidebar__button sidebar__settings_button">
            Settings
          </div>
        </div>
    );
  }
}

export default Sidebar;
