import React, { Component } from "react";
import Rockers from "./components/Rockers";
import Wrapper from "./components/Wrapper";
import rockGods from "./rockGods.json";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    rockGods,
    idsClicked: [],
    score: 0,
    winningscore: 12,
    messsage: "",
  };

  shuffleCards = (id) => {
    let idsClicked = this.state.idsClicked;
    console.log("Clicked IT!!")

    if (idsClicked.includes(id)) {
      this.setState({
        idsClicked: [], score: 0
      })
      alert("You lost, click to play again")
      return
    } else {
      idsClicked.push(id);
    }

    if (idsClicked.length === this.state.rockGods.length) {
      this.setState({
        score: 0, idsClicked: []
      })
      alert("You're a winner baby click to play again")
      return
    }

    this.setState({ rockGods, idsClicked, score: idsClicked.length, status: " " });
    var i = 0, j = 0, temp = null

    for (i = rockGods.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = rockGods[i]
      rockGods[i] = rockGods[j]
      rockGods[j] = temp
    }

  }

  render() {
    return (
      <Wrapper>
        <Header>
          <p style={{ textAlign: "center" }}>Want to play a game? Test your memory</p>
          <h2 style={{ textAlign: "center" }}>Score: {this.state.score} | Score to meet: {this.state.winningscore}</h2>
          <h3 style={{ textAlign: "center", color: "red" }}>{this.state.message}</h3>
        </Header>

        {this.state.rockGods.map(rockgod => (
          <Rockers
            shuffleCards={this.shuffleCards}
            id={rockgod.id}
            key={rockgod.id}
            image={rockgod.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
