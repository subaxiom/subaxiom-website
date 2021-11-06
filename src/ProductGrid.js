import React from "react";
import { productData } from "./productData";
//import { useHistory } from "react-router";

function ProductGridComponent() {
  //let { id } = useParams();
  //alert(id);
  //var id = 3;
  //var names = ['Jake', 'Jon', 'Thruster'];
  var namesList = productData.map(function (product) {
    return <li>{product.company}</li>;
  });
  return <ul>{namesList}</ul>;
}

export const ProductGrid = () => {
  return (
    <div style={{ color: "#ffffff" }}>
      <ProductGridComponent />
    </div>
  );
};
