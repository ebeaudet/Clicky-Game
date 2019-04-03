import React from "react";
import "./style.css";

function Rockers(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.shuffleCards(props.id)} className="clicked"/>
      </div>
    </div>
  );
}

export default Rockers;
