import React, { Component } from 'react';
import './Sidebar.css';
import { BrowserRouter as Link } from 'react-router-dom'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="sidebar__container">
      
        <div className="sidebar__button sidebar__home_button"><Link to='/home'>Home</Link></div>
      
        <div className="sidebar__button sidebar__add_button">Add</div>
        <Link to='/gallery'>
        <div className="sidebar__button sidebar__viewall_button">View All</div>
        </Link>
        <div className="sidebar__button sidebar__settings_button">Settings</div>
      </div>
     )
  }
}
 
export default Sidebar;