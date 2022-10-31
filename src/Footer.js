import React from "react";
import socialSprite from "./img/socialSprite.png";
//import { useHistory } from "react-router";

export const Footer = () => {
  return (
    <div className="footer">
      <h3>
        connect on social: <b>@subAxiom</b>
      </h3>
      <table>
        <SocialRow spritePos="0px" socialUrl="https://twitter.com/subAxiom" />
        <SocialRow
          spritePos="-20px"
          socialUrl="https://gettr.com/user/subAxiom"
        />
        <SocialRow spritePos="-40px" socialUrl="https://gab.com/subAxiom" />
        <SocialRow spritePos="-60px" socialUrl="https://parler.com/subAxiom" />
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
      </table>
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
