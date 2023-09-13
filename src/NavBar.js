import React from "react";
import "./styles.css";
import { SearchTextbox } from "./SearchTextbox";
//import { useParams } from "react-router-dom";

const NavBarComponent = (props) => {
  //let params = useParams();
  //let navigate = useNavigate();

  return (
    <div className="NavBar">
      <div className="leftOuterContainer">
        <div className="leftInnerContainer">
          <SearchTextbox />
        </div>
      </div>
    </div>
  );
};

export const NavBar = (props) => {
  return (
    <div>
      <NavBarComponent />
    </div>
  );
};

export default NavBarComponent;
