import React, { Component } from "react";
import "./Home.css";
import Homenav from "./homenav/Homenav";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["James", "Penny", "Scout", "Pencil"]
    };
  }
  render() {
    return (
      <div className="home__container">
        {/* Map over array of keys of categories coming from DB */}
        {this.state.categories.map((category, index) => {
          return (
            <div className="item item1">
              <Homenav index={index} categories={category} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
