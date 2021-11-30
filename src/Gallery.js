import React from "react";
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";
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

    images.push(
      <img
        className="thumbnail"
        key={imageId}
        src={image.src}
        title={image.relevancy}
        alt={image.title}
        onClick={async (event) => {
          //alert(url);
          //history.push(url)
          navigate(`/image/${imageId}`, { replace: true });
        }}
      />
    );
  });

  /*
  for (const [imageId, image] of results) {
    //url = href + 'image/' + key;
    images.push(
      <img
        className="thumbnail"
        key={imageId}
        src={image.src}
        title={image.relevancy}
        alt={image.title}
        onClick={async (event) => {
          //alert(url);
          //history.push(url)
          navigate(`/image/${image.id}`, { replace: true });
        }}
      />
    );
  }*/
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
