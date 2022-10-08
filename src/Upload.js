import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UploadComponent = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let encrypt = props.encrypt;
  let encryptedUrl = params.encryptedUrl;
  let nonce = params.nonce;

  let textAreaValue =
    "original: " + encryptedUrl + ",\nnonce: " + nonce + ",\n";

  let arweaveUrl = "";
  let setArweaveUrl = function (value) {
    arweaveUrl = value;
  };

  let encryptArweaveUrl = function () {
    let cipher = encrypt(arweaveUrl);
    let cipherHex = cipher.cipherHex;
    let nonceHex = cipher.nonceHex;
    let navLink = "/upload/" + cipherHex + "/" + nonceHex;
    navigate(navLink, { replace: true });
  };

  return (
    <div className="page-wrapper">
      <div className="pageSection">
        <br />
        <br />
        <h2>Add New Image</h2>
        <br />
        <br />
        <b>ARWEAVE IMAGE URL:</b>
        <br />
        <input
          type="text"
          defaultValue={arweaveUrl}
          onChange={(e) => setArweaveUrl(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <br />
        <div
          className="greenButton"
          onClick={async (event) => {
            encryptArweaveUrl();
          }}
        >
          Get Encrypted URL & nonce
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <textarea
          className="myTextarea"
          value={textAreaValue}
          rows={10}
          cols={200}
        />
        <br />
      </div>
    </div>
  );
};

export const Upload = (props) => {
  return (
    <div>
      <UploadComponent encrypt={props.encrypt} />
    </div>
  );
};

export default UploadComponent;
