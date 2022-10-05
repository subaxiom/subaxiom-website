import React from "react";
import { ImageThumbnail } from "./ImageThumbnail";
import "./styles.css";

const GalleryComponent = (props) => {
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let imageArray = galleryData.sort;
  let justSimilar = props.justSimilar;
  let scrollToVertical = props.scrollToVertical;

  if (justSimilar) imageArray = galleryData.similar;

  let images = [];

  imageArray.forEach(function (arrayItem) {
    var imageId = arrayItem.imageId;
    var image = galleryMap.get(imageId);
    image.imageId = imageId;

    images.push(
      <ImageThumbnail image={image} scrollToVertical={scrollToVertical} />
    );
  });

  return <div>{images}</div>;
};

export const Gallery = (props) => {
  let galleryData = props.galleryData;
  let justSimilar = props.justSimilar;
  let scrollToVertical = props.scrollToVertical;

  return (
    <div className="page-wrapper">
      <GalleryComponent
        galleryData={galleryData}
        justSimilar={justSimilar}
        scrollToVertical={scrollToVertical}
      />
    </div>
  );
};

export default GalleryComponent;
