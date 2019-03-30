import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./rockGods.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend => <FriendCard friend={friend} />)}
     </Wrapper>
    );
  }
}

export default App;
