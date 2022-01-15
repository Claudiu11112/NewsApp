import React, { Component } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
// import Scroll from "../components/Scroll";
import Footer1 from "../components/Footer1";
import "./App.css";
import CardListBig from "../components/CardListBig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idtb: [],
      searchfield: "",
      showN: false,
      ids: 7,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((users) => this.setState({ idtb: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  showNews = () => {
    this.setState({ showN: true });
  };
  showNew = () => {
    this.setState({ showN: false });
  };

  render() {
    const showId = this.state.idtb;
    const showN = this.state.showN;
    const ids = this.state.ids;
    const filteredCards = this.state.idtb.filter((idtb) => {
      return idtb.title
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.idtb.length === 0) {
      return <h1>Loading...</h1>;
    } else if (showN === true) {
      // alert("I'm an alert  "+ this.showN);
      return (
        <div className="app">
          <CardListBig card={showId} showNew={this.showNew} showId={ids} />
          <Header onSearchChange={this.onSearchChange}></Header>
          <Footer1 />
        </div>
      );
    } else {
      return (
        <div className="app">
          {/* <Scroll> */}
          <CardList cards={filteredCards} showNews={this.showNews} />
          {/* </Scroll> */}
          <Header onSearchChange={this.onSearchChange}></Header>
          <Footer1 />
        </div>
      );
    }
  }
}

export default App;
