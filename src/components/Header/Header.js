import React from "react";
import "./style.css";

function Header(props){

   return<div className="header" message={props.message} style={{backgroundColor: "gray"}}>{props.children}</div>;
} 
  
  export default Header;