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

  
// componentDidUpdate() {
//   this.setState({
//     familyLink: `gallery/${this.props.currentUserFamilyId}/all`
//   })
// }
  
  
  render() {
    return (
      <div className="sidebar__container">
          <Link to='/home'  className="sidebar__button sidebar__home_button">Home</Link>
          <Link to='/addcategory'  className="sidebar__button sidebar__add_button">Add</Link>
          <div className="sidebar__button sidebar__viewall_button">
    {console.log(`${this.props.currentUserFamilyId}`)}
          <Link to='/gallery/all/all'>
            All
          </Link>
          <Link to={this.state.familyLink}>
            Family
          </Link>
          </div>
          <Link to='/settings' className="sidebar__button sidebar__settings_button">Settings</Link>
        </div>
    );
  }
}

export default Sidebar;
