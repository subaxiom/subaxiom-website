import React from "react";
import { galleryData } from "./galleryData";
//import { useHistory } from "react-router";

function GalleryComponent() {
  //let { id } = useParams();
  //alert(id);
  //var id = 3;
  //var names = ['Jake', 'Jon', 'Thruster'];
  var namesList = galleryData.map(function (preview) {
    return <li>{preview.company}</li>;
  });
  return <ul>{namesList}</ul>;
}

export const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <Gallery />
    </div>
  );
};
