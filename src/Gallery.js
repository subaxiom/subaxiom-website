import React from "react";
import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";
import { useNavigate } from "react-router-dom";
//import history from './history';

const GalleryComponent = () => {
  //var href = window.location.href;
  let navigate = useNavigate();
  let images = [];
  //let url = null;
  for (const [imageId, image] of galleryMap) {
    //url = href + 'image/' + key;
    images.push(
      <img
        className="thumbnail"
        key={imageId}
        src={image.src}
        alt={image.title}
        onClick={async (event) => {
          //alert(url);
          //history.push(url)
          navigate(`/image/${imageId}`, { replace: true });
        }}
      />
    );
  }
  return <div>{images}</div>;
};

export const Gallery = () => {
  return (
    <div className="page-wrapper">
      <GalleryComponent />
    </div>
  );
};

export default GalleryComponent;
