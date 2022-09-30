import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
nacl.util = naclUtil;

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i !== bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const KeysComponent = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let encryptedMessage = params.encryptedMessage;
  let decryptedCipher = params.decryptedCipher;
  let cartMap = props.cartMap;
  let keyPair = nacl.box.keyPair();
  let nonce = nacl.randomBytes(24);

  if (encryptedMessage === "na") {
    encryptedMessage = null;
    //decryptedCipher = decodeURIComponent(decryptedCipher);
  }

  let message = "The Fat Man Walks Alone";
  let setMessage = function (value) {
    message = value;
  };

  let senderSecretKey = "";
  let setSenderSecretKey = function (value) {
    senderSecretKey = value;
  };

  let receiverPublicKey = "";
  let setReceiverPublicKey = function (value) {
    receiverPublicKey = value;
  };

  let encryptNonce = "";
  let setEncryptNonce = function (value) {
    encryptNonce = value;
  };

  //let messageInTransit = "";
  let setEncryptedMessage = function (value) {
    encryptedMessage = nacl.box(
      nacl.util.decodeUTF8(message),
      hexToBytes(encryptNonce),
      hexToBytes(receiverPublicKey),
      hexToBytes(senderSecretKey)
    );
    navigate(`/keys/${bytesToHex(encryptedMessage)}`, { replace: true });
  };

  let cipher = "";
  let setCipher = function (value) {
    cipher = value;
  };

  let receiverSecretKey = "";
  let setReceiverSecretKey = function (value) {
    receiverSecretKey = value;
  };

  let senderPublicKey = "";
  let setSenderPublicKey = function (value) {
    senderPublicKey = value;
  };

  let decryptNonce = "";
  let setDecryptNonce = function (value) {
    decryptNonce = value;
  };

  let setDecryptedCipher = function (value) {
    decryptedCipher = nacl.box.open(
      hexToBytes(cipher),
      hexToBytes(decryptNonce),
      hexToBytes(senderPublicKey),
      hexToBytes(receiverSecretKey)
    );
    let decryptedPlainText = nacl.util.encodeUTF8(decryptedCipher);
    let decryptedUriEncoded = encodeURIComponent(decryptedPlainText);
    navigate(`/keys/na/${decryptedUriEncoded}`, { replace: true });
    //alert(decryptedPlainText);
    //alert(decryptedUriEncoded);
  };

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />
      <br />

      <div className="pageSection">
        <h2>Key Pair</h2>
        <br />
        <br />
        <b>PUBLIC KEY:</b>
        <br />
        {bytesToHex(keyPair.publicKey)}
        <br />
        <br />
        <br />
        <b>SECRET KEY:</b>
        <br />
        {bytesToHex(keyPair.secretKey)}
        <br />
        <br />
        <br />
      </div>

      <div className="pageSection">
        <br />
        <br />
        <h2>Nonce</h2>
        <br />
        <br />
        <b>NONCE:</b>
        <br />
        {bytesToHex(nonce)}
        <br />
        <br />
        <br />
      </div>

      <div className="pageSection">
        <br />
        <br />
        <h2>Encrypt Message</h2>
        <br />
        <br />
        <b>MESSAGE (plain text):</b>
        <br />
        <input
          type="text"
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <b>SENDER SECRET KEY:</b>
        <br />
        <input
          type="text"
          defaultValue={senderSecretKey}
          onChange={(e) => setSenderSecretKey(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <b>RECEIVER PUBLIC KEY:</b>
        <br />
        <input
          type="text"
          defaultValue={receiverPublicKey}
          onChange={(e) => setReceiverPublicKey(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <b>NONCE:</b>
        <br />
        <input
          type="text"
          defaultValue={encryptNonce}
          onChange={(e) => setEncryptNonce(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <br />
        <div
          className="greenButton"
          onClick={async (event) => {
            setEncryptedMessage();
          }}
        >
          Encrypt Message
        </div>
        <br />
        <br />
        {encryptedMessage}
        <br />
        <br />
      </div>

      <div className="pageSection">
        <br />
        <br />
        <h2>Dencrypt Message</h2>
        <br />
        <br />
        <b>CIPHER TEXT:</b>
        <br />
        <input
          type="text"
          defaultValue={cipher}
          onChange={(e) => setCipher(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <b>RECEIVER SECRET KEY:</b>
        <br />
        <input
          type="text"
          defaultValue={receiverSecretKey}
          onChange={(e) => setReceiverSecretKey(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <b>SENDER PUBLIC KEY:</b>
        <br />
        <input
          type="text"
          defaultValue={senderPublicKey}
          onChange={(e) => setSenderPublicKey(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <b>NONCE:</b>
        <br />
        <input
          type="text"
          defaultValue={decryptNonce}
          onChange={(e) => setDecryptNonce(e.target.value)}
          className="largeInput"
        />
        <br />
        <br />
        <br />
        <div
          className="greenButton"
          onClick={async (event) => {
            setDecryptedCipher();
          }}
        >
          Decrypt Cipher
        </div>
        <br />
        <br />
        {decryptedCipher}
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export const Keys = (props) => {
  return (
    <div>
      <KeysComponent cartMap={props.cartMap} />
    </div>
  );
};

export default KeysComponent;
