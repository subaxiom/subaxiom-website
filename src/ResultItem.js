import React from "react";
import "./styles.css";

const ResultItemComponent = (props) => {
  let siteIconData = props.siteIconData;
  let siteIconMap = siteIconData.siteIconMap;
  let resultItemJsonString = props.resultItemJsonString;
  let resultItemJson = JSON.parse(resultItemJsonString);
  //let id = resultItemJson.id;
  let title = resultItemJson.title;
  let url = resultItemJson.url;
  let site = resultItemJson.site;
  let date = resultItemJson.date;
  let text = resultItemJson.text;
  text = text.substring(0, 200);

  var siteIcon = siteIconMap.get("unknown");
  if (siteIconMap.has(site)) {
    siteIcon = siteIconMap.get(site);
  }

  var backgroundPos =
    "-" + siteIcon.thumbnailX + "px -" + siteIcon.thumbnailY + "px";

  return (
    <div className="searchResultsItem">
      <div className="resultItemHeader">
        <div
          className="siteIcon"
          style={{
            backgroundImage: `url(${siteIcon.thumbnailSrc})`,
            backgroundPosition: `${backgroundPos}`,
            backgroundRepeat: "no-repeat"
          }}
        ></div>

        <div>
          <span className="resultItemHeaderSiteName">{site}</span>
          <br />
          <span className="resultItemHeaderUrl">{url}</span>
        </div>
      </div>
      <a target="_top" className="resultItemTitle" href={url}>
        {title}
      </a>
      <br />
      <div className="resultItemSnippet">
        <b>{date}</b> - {text}
      </div>
    </div>
  );
};

export const ResultItem = (props) => {
  return (
    <ResultItemComponent
      resultItemJsonString={props.resultItemJsonString}
      siteIconData={props.siteIconData}
    />
  );
};

export default ResultItemComponent;
