import React from "react";
import { ImageThumbnail } from "./ImageThumbnail";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const GalleryComponent = (props) => {
  let navigate = useNavigate();
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let imageArray = galleryData.sort;
  let justSimilar = props.justSimilar;
  let scrollToVertical = props.scrollToVertical;
  if (justSimilar) imageArray = galleryData.similar;

  /*
  
    // API for get requests
    let fetchRes = fetch(
      "149.28.123.181:8000/?query=Mr.%20Miyagi%20and%20Daniel%20fight%20Sensei%20Kreese%20and%20Johnny%20in%20a%20karate%20tournament%0A", {method:'GET', mode:'cors'});
      // fetchRes is the promise to resolve
      // it by using.then() method
      fetchRes.then(res =>
          res.json()).then(d => {
              alert(JSON.stringify(d))
          })
    */

  let thumbnailOnclick = function (imageId) {
    navigate(`/image/${imageId}`, { replace: true });
    scrollToVertical(0);
  };

  let images = [];

  imageArray.forEach(function (arrayItem) {
    var imageId = arrayItem.imageId;
    var image = galleryMap.get(imageId);
    image.imageId = imageId;

    images.push(
      <ImageThumbnail image={image} thumbnailOnclick={thumbnailOnclick} />
    );
  });

  return <div>{images}</div>;
};

export const Gallery = (props) => {
  let galleryData = props.galleryData;
  let justSimilar = props.justSimilar;
  let scrollToVertical = props.scrollToVertical;
  let searchResponse = props.searchResponse;

  return (
    <div>
      <div>{searchResponse}</div>
      <GalleryComponent
        galleryData={galleryData}
        justSimilar={justSimilar}
        scrollToVertical={scrollToVertical}
      />
    </div>
  );
};

export default GalleryComponent;
