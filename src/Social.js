import React from "react";
import twitter from "./img/twitter5.png";
import gab from "./img/gab.png";
import rumble from "./img/rumble3.png";
import substack from "./img/substack4.png";
//import { useHistory } from "react-router";



export const Social = () => {
  return (
    <div className="social-wrapper">
      <img src={twitter} alt="twitter" className="social" />
      <img src={gab} alt="gab" className="social" />
      <img src={rumble} alt="rumble" className="social" />
      <img src={substack} alt="substack" className="social" />
  </div>
  );
};