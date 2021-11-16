import React from "react";
import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";
import { useNavigate, Link } from "react-router-dom";
//import history from './history';

const GalleryComponent = () => {
  //var href = window.location.href;
  let navigate = useNavigate();
  let images = [];
  //let url = null;
  for (const [key, value] of galleryMap) {
    //url = href + 'image/' + key;
    images.push(
      <img
        className="thumbnail"
        key={key}
        src={value}
        alt={value.alt}
        onClick={async (event) => {
          //alert(url);
          //history.push(url)
          navigate(`/image/${key}`, { replace: true });
        }}
      />
    );
  }
  return <div>{images}</div>;
};

export const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <GalleryComponent />
    </div>
  );
};

export default GalleryComponent;
