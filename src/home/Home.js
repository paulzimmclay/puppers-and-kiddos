// This component renders a column with a title and three buttons for each category

import React, { Component } from "react";
import "./Home.css";
import Homenav from "./homenav/Homenav";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="home__container">
        {/* Map over array of keys of categories coming from DB */}
        {this.props.categories.map((category) => {
          return (
            <div className="notebook" key={category[1]} >
              <Homenav 
              currentUserFamilyId={this.props.currentUserFamilyId}
              categories={category}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;