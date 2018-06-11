import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="sidebar__container">
        <div className="sidebar__button sidebar__home_button">Home</div>
        <div className="sidebar__button sidebar__add_button">Add</div>
        <div className="sidebar__button sidebar__viewall_button">View All</div>
        <div className="sidebar__button sidebar__settings_button">Settings</div>
      </div>
     )
  }
}
 
export default Sidebar;