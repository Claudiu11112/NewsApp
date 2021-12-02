import React, { Component } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
// import Scroll from "../components/Scroll";
import Footer1 from "../components/Footer1";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredCards = this.state.robots.filter((robot) => {
      return robot.title
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="app">
          {/* <Scroll> */}
          <CardList cards={filteredCards} />
          {/* </Scroll> */}
          <Header onSearchChange={this.onSearchChange}></Header>
          <Footer1 />
        </div>
      );
    }
  }
}

export default App;
