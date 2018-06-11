import React, { Component } from 'react';
import './Homenav.css'

class Homenav extends Component {
  
  
  render() { 
    return ( 
      <div className="homenav__container">
      {console.log(this.props.key)}
        <h1 className="homenav__name">{this.props.categories}</h1>
        <div className={this.props.index} className="another thing">Add New</div>
        <div className="homenav__button homenav__view">View</div>
        <div className="homenav__button homenav__edit">Edit</div>
      </div>
     )
  }
}
 
export default Homenav;