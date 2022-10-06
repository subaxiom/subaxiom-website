import React from "react";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import { HashLink as Link } from "react-router-hash-link";
import { galleryData } from "./galleryData";
import { topicsMap, peopleMap } from "./filterData";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Gallery } from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faXmark,
  faCartShopping,
  faArrowUpRightFromSquare,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
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
  let scrollToVertical = props.scrollToVertical;
  let returnLink = "/#" + imageId;
  //let twitterLink = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(image.src);
  //scrollToTop();
  const saveFile = () => {
    saveAs(image.src, image.title.replaceAll(" ", "") + ".jpg");
  };

  findSimilar(imageId, tagSet);

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />

      <div className="pageSection">
        <div
          style={{
            backgroundImage: 'url("' + image.src + '")',
            backgroundSize: "800px 600px",
            backgroundRepeat: "no-repeat"
          }}
          className="image-preview"
          key={imageId}
          alt={image.title}
        />

        <div className="caption-wrapper">
          <h2>{image.title}</h2>

          <button className="shareLink" onClick={saveFile}>
            <FontAwesomeIcon icon={faDownload} />
          </button>

          <a
            className="shareLink"
            href={image.src}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>

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
          <Link className="bigLink" to={returnLink}>
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
      <Gallery
        galleryData={galleryData}
        scrollToVertical={scrollToVertical}
        justSimilar
      />
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
