import React from "react";
import socialSprite from "./img/socialSprite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//import { useHistory } from "react-router";

export const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>contact us:</h2>
        <div className="footer-email-link">
          <a href="mailto:subAxiom@protonmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> subAxiom@protonmail.com
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h2>connect on social:</h2>
        <table>
          <tbody>
            <SocialRow
              spritePos="0px"
              socialUrl="https://twitter.com/subAxiom"
            />
            <SocialRow
              spritePos="-20px"
              socialUrl="https://gettr.com/user/subAxiom"
            />
            <SocialRow spritePos="-40px" socialUrl="https://gab.com/subAxiom" />
            <SocialRow
              spritePos="-60px"
              socialUrl="https://parler.com/subAxiom"
            />
            <SocialRow
              spritePos="-80px"
              socialUrl="https://truthsocial.com/@subAxiom"
            />
            <SocialRow
              spritePos="-100px"
              socialUrl="https://t.me/subAxiomChannel"
            />
            <SocialRow
              spritePos="-120px"
              socialUrl="https://subAxiom.substack.com"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SocialRow = (props) => {
  let socialUrl = props.socialUrl;
  let spritePos = props.spritePos;

  return (
    <tr>
      <td>
        <div
          style={{
            width: "90px",
            height: "20px",
            backgroundImage: `url(${socialSprite})`,
            backgroundPosition: `0px ${spritePos}`,
            backgroundRepeat: "no-repeat"
          }}
        />
      </td>
      <td>
        <a target="_top" href={socialUrl}>
          {socialUrl}
        </a>
      </td>
    </tr>
  );
};
