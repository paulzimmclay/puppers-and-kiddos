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
        {this.props.categories.map((category, index) => {
          return (
            <div className="notebook">
              <Homenav index={index} categories={category} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
