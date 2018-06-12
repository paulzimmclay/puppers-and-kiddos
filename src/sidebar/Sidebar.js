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
          <Link to='/home'><div className="sidebar__button sidebar__home_button">Home</div></Link>
          <Link to='/addcategory'> <div className="sidebar__button sidebar__add_button">Add</div></Link>
          <Link to='/gallery'><div className="sidebar__button sidebar__viewall_button">
            View All
          </div></Link>
          <div className="sidebar__button sidebar__settings_button">
            Settings
          </div>
        </div>
    );
  }
}

export default Sidebar;
