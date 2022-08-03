import React from "react";
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";
import loadingGif from "./img/loading.gif";
import thumbnailSprite from "./img/thumbnailSprite.png";
import { useNavigate } from "react-router-dom";
//import history from './history';

const GalleryComponent = (props) => {
  //var href = window.location.href;
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let sort = galleryData.sort;
  //alert(JSON.stringify(sorted));
  let navigate = useNavigate();
  let images = [];
  //let url = null;

  sort.forEach(function (arrayItem) {
    var imageId = arrayItem.imageId;
    var image = galleryMap.get(imageId);
    var backgroundPos =
      "-" + image.thumbnailX + "px -" + image.thumbnailY + "px";

    images.push(
      <div
        style={{
          backgroundImage: `url(${loadingGif})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="thumbnail"
        key={imageId}
        title={image.relevancy}
        alt={image.title}
        onClick={async (event) => {
          //alert(url);
          //history.push(url)
          navigate(`/image/${imageId}`, { replace: true });
        }}
      >
        <div
          style={{
            backgroundImage: `url(${thumbnailSprite})`,
            backgroundPosition: `${backgroundPos}`,
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
    );

    /*
    images.push(
      <img
        className="thumbnail"
        key={imageId}
        src={thumbnailSprite}
        title={image.relevancy}
        alt={image.title}
        onClick={async (event) => {
          //alert(url);
          //history.push(url)
          navigate(`/image/${imageId}`, { replace: true });
        }}
      />
    );
*/
  });

  return (
    <div>
      {images}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export const Gallery = (props) => {
  let galleryData = props.galleryData;
  return (
    <div className="page-wrapper">
      <GalleryComponent galleryData={galleryData} />
    </div>
  );
};

export default GalleryComponent;
