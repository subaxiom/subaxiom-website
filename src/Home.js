import React from "react";
import subaxiomLogo from "./img/subaxiomLogo_280x200.png";
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
        <div className="searchTextboxContainerHome">
          <SearchTextbox />
        </div>
      </div>
      <div className="horizontalCenter">
        <span className="tagline">
          Find the stuff Google doesn't want you to find.
        </span>
      </div>
    </div>
  );
}
