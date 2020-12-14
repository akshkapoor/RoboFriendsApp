import React, { Component } from "react";
import "./App.css";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import { robots } from "./robots.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  Searchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredrobots = this.state.robots.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchange={this.Searchchange} />
        <Cardlist robots={filteredrobots} />
      </div>
    );
  }
}

export default App;
