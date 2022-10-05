import React from "react";
import "./styles.css";
import loadingGif from "./img/loading.gif";

const ImageThumbnailComponent = (props) => {
  let thumbnailOnclick = props.thumbnailOnclick;
  let image = props.image;
  var backgroundPos = "-" + image.thumbnailX + "px -" + image.thumbnailY + "px";

  return (
    <div
      id={image.imageId}
      style={{
        backgroundImage: `url(${loadingGif})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      className="thumbnail"
      key={image.imageId}
      title={image.relevancy}
      alt={image.title}
      onClick={async (event) => {
        thumbnailOnclick(image.imageId);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image.thumbnailSrc})`,
          backgroundPosition: `${backgroundPos}`,
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  );
};

export const ImageThumbnail = (props) => {
  return (
    <ImageThumbnailComponent
      image={props.image}
      thumbnailOnclick={props.thumbnailOnclick}
    />
  );
};

export default ImageThumbnailComponent;
