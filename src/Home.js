import React from "react";
import subaxiomLogo from "./img/subaxiomLogo_400x280.png";
import tagline from "./img/tagline_500x25.png";
import "./styles.css";
import { SearchTextbox } from "./SearchTextbox";

export default function Home(props) {
  //let params = useParams();

  return (
    <div className="App">
      <div className="horizontalCenter">
        <img className="subaxiomLogo" src={subaxiomLogo} alt="subAxiom Logo" />
      </div>
      <div className="horizontalCenter">
        <SearchTextbox />
      </div>
      <div className="horizontalCenter">
        <img
          className="tagline"
          src={tagline}
          alt="Find the stuff Google doesn't want you to find."
        />
      </div>
    </div>
  );
}
