import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { SearchTextbox } from "./SearchTextbox";

export default function Home(props) {
  //let params = useParams();

  return (
    <div className="App">
      <SearchTextbox />
    </div>
  );
}
