import React from "react";
import "./styles.css";

const ResultItemComponent = (props) => {
  let resultItemJsonString = props.resultItemJsonString;
  let resultItemJson = JSON.parse(resultItemJsonString);
  //let id = resultItemJson.id;
  let title = resultItemJson.title;
  let url = resultItemJson.url;
  let text = resultItemJson.text;

  return (
    <div>
      <br />
      <a target="_top" className="resultItemTitle" href={url}>
        {title}
      </a>
      <br />
      <div className="resultItemSnippet">{text}</div>
      <br />
    </div>
  );
};

export const ResultItem = (props) => {
  return (
    <ResultItemComponent resultItemJsonString={props.resultItemJsonString} />
  );
};

export default ResultItemComponent;
