import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import Scroll from "../components/Scroll";

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
        <div className="">
          <div className="tc relative ma1" style={{ top: 80 }}>
            {/* <Scroll> */}
            <CardList cards={filteredCards} />
            {/* </Scroll> */}
          </div>

          <div
            className="ma0 pa2 fixed left-0 top-0 right-0"
            style={{ background: "#15202a" }}
          >
            <h1 className="dib ma1 blue hover-dark-blue">
              <strong>News</strong> <span className="f4">App</span>{" "}
            </h1>
            <span className="dib ma2 w-15 fr">
              <SearchBox searchChange={this.onSearchChange} />
            </span>
            {/* <h4 className="dib gray fr hover-dark-blue">CONTACT</h4> */}
          </div>
        </div>
      );
    }
  }
}

export default App;
