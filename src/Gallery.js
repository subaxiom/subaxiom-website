import React from "react";
import { imagesArray } from "./imagesData";

//import twitter from "./img/twitter5.png";
//import gab from "./img/gab.png";

//import imagesData from "./imagesData";
//import { useHistory } from "react-router";

/*
const imagesArray = [
  twitter,
  gab
];
*/

function GalleryComponent() {
  //let { id } = useParams();
  //alert(id);
  //var id = 3;
  //var names = ['Jake', 'Jon', 'Thruster'];
  /*
  return <div className="App">
    {galleryData.map(p => {
      return <div style={{ backgroundImage: p.src; width:100px; height:100px; }}></div>
    })}


return (<div>{images}</div>);

*/

  //var images = imagesArray.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

  /*
var images =  imagesArray.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />);
*/

  /*
    return (
      <div>
      <img src={images[0]} alt="twitter" className="social" />
      <img src={gab} alt="gab" className="social" />
      </div>);
*/

  var images = imagesArray.map((image, index) => (
    <img key={index} src={image} alt={image.alt} />
  ));
  return <div>{images}</div>;

  /*

  var images = imagesArray.map(function (image) {
    return <img key={image.id} src={image.src} alt={image.alt}/>;
  });
*/

  //return <div>{images}</div>;
}

export const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <GalleryComponent />
    </div>
  );
};
