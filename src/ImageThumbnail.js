import React from "react";
import "./styles.css";
import loadingGif from "./img/loading.gif";
import { useNavigate } from "react-router-dom";

const ImageThumbnailComponent = (props) => {
  let navigate = useNavigate();
  let scrollToVertical = props.scrollToVertical;
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
        //alert(url);
        //history.push(url)
        navigate(`/image/${image.imageId}`, { replace: true });
        scrollToVertical(0);
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
      scrollToVertical={props.scrollToVertical}
    />
  );
};

export default ImageThumbnailComponent;
