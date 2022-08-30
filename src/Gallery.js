import React from "react";
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";
import loadingGif from "./img/loading.gif";
import { useNavigate } from "react-router-dom";
//import history from './history';

const GalleryComponent = (props) => {
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let imageArray = galleryData.sort;
  let justSimilar = props.justSimilar;
  let scrollToTop = props.scrollToTop;

  if (justSimilar) imageArray = galleryData.similar;

  let navigate = useNavigate();
  let images = [];

  imageArray.forEach(function (arrayItem) {
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
          scrollToTop();
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

  return <div>{images}</div>;
};

export const Gallery = (props) => {
  let galleryData = props.galleryData;
  let justSimilar = props.justSimilar;
  let scrollToTop = props.scrollToTop;

  return (
    <div className="page-wrapper">
      <GalleryComponent
        galleryData={galleryData}
        justSimilar={justSimilar}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default GalleryComponent;
