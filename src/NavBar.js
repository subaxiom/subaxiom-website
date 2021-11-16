import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import logo from "./img/subaxiomLogoSmall2.png";
import cart from "./img/cart2.png";
//import { useParams } from "react-router-dom";

const NavBarComponent = (props) => {
  //let params = useParams();
  //let navigate = useNavigate();
  let cartMap = props.cartMap;

  return (
    <div className="NavBar">
      <Link className="homeLink" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      &nbsp;
      <Link className="cartLink" to="/cart">
        <img src={cart} alt="cart" className="cart" />
        &nbsp;({cartMap.size})
      </Link>
    </div>
  );
};

export const NavBar = (props) => {
  return (
    <div>
      <NavBarComponent cartMap={props.cartMap} />
    </div>
  );
};

export default NavBarComponent;
