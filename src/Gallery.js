import React from "react";
import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";
import { useNavigate } from "react-router-dom";

const GalleryComponent = () => {
  let navigate = useNavigate();
  let images = [];
  for (const [key, value] of galleryMap) {
    images.push(
      <img
        key={key}
        src={value}
        alt={value.alt}
        onClick={async (event) => {
          navigate(`/image/${key}`);
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
