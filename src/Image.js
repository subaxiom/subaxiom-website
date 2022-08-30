import React from "react";
import { useParams, Link } from "react-router-dom";
import { galleryData } from "./galleryData";
import { topicsMap, peopleMap } from "./filterData";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Gallery } from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faXmark,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const ImageComponent = (props) => {
  let params = useParams();
  let imageId = params.imageId;
  let image = galleryData.galleryMap.get(imageId);
  let tagSet = image.tags;
  let cartMap = props.cartMap;
  let findSimilar = props.findSimilar;
  let scrollToTop = props.scrollToTop;
  scrollToTop();

  findSimilar(imageId, tagSet);

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />

      <div className="pageSection">
        <div
          style={{
            backgroundImage: image.src,
            backgroundSize: "800px 600px",
            backgroundRepeat: "no-repeat"
          }}
          className="image-preview"
          key={imageId}
          alt={image.title}
        />

        <div className="caption-wrapper">
          <h2>{image.title}</h2>

          <div className="caption">
            $19.99
            <br />
            hi-res 4000 x 3000 png
            <br />
            watermark removed
            <br />
            royalty free license
            <br />
            <br />
            <AddToCartComponent
              cartMap={cartMap}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              imageId={imageId}
            />
          </div>

          <br />
          <br />
          <Link className="bigLink" to="/">
            <FontAwesomeIcon icon={faCircleArrowLeft} /> return to gallery
          </Link>
          <br />
          <br />

          <br />
        </div>
      </div>
      <br />

      <div className="tagsSection">
        <div className="tagsHeader">tags: </div>
        <Tags tagSet={tagSet} />
      </div>

      <br />

      <div className="tagsHeader">similar images: </div>
      <Gallery galleryData={galleryData} justSimilar />
      <br />
      <br />
      <br />
    </div>
  );
};

const AddToCartComponent = (props) => {
  let navigate = useNavigate();
  let imageId = props.imageId;
  let addToCart = props.addToCart;
  let removeFromCart = props.removeFromCart;
  let cartMap = props.cartMap;

  if (cartMap.has(imageId)) {
    return (
      <div>
        Image added to cart.
        <br />
        <br />
        <Link className="smallLink" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} /> view cart
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span
          className="smallLink"
          onClick={async (event) => {
            //alert(url);
            //history.push(url)
            removeFromCart(imageId);
            navigate(`/image/${imageId}`, { replace: true });
          }}
        >
          <FontAwesomeIcon icon={faXmark} /> remove from cart
        </span>
      </div>
    );
  } else {
    return (
      <div
        className="greenButton"
        onClick={async (event) => {
          addToCart(imageId);
          navigate(`/image/${imageId}`, { replace: true });
        }}
      >
        + Add to Cart
      </div>
    );
  }
};

const Tags = (props) => {
  let tagSet = props.tagSet;

  let tags = [];
  let tagName = "";

  function addTagHtml(value) {
    tagName = topicsMap.get(value);
    if (!tagName) tagName = peopleMap.get(value);
    if (tagName) tags.push(<span className="tag">{tagName.name}</span>);
  }

  tagSet.forEach(addTagHtml);

  return tags;
};

export const ImagePreview = (props) => {
  return (
    <div>
      <ImageComponent
        cartMap={props.cartMap}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
      />
    </div>
  );
};

export default ImageComponent;
