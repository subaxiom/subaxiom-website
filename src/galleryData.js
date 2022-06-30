import img1 from "./gallery/BidenOffersNeoChoices.jpg";
import gab from "./gallery/BidenPigletXiPooh2.jpg";
import img3 from "./gallery/FauciAsFreddy.jpg";

const galleryMap = new Map();

galleryMap.set("0001", {
  src: img1,
  title: "Biden Secures Wrong Border",
  tags: new Set().add("joe biden").add("tony fauci"),
  relevancy: 0
});
galleryMap.set("0002", {
  src: gab,
  title: "Biden Offers Neo Red Pill / Blue Pill",
  tags: new Set().add("joe biden").add("matrix").add("guns").add("crypto"),
  relevancy: 0
});
galleryMap.set("0003", {
  src: img3,
  title: "Biden Offers Neo Red Pill / Blue Pill",
  tags: new Set().add("joe biden").add("matrix").add("guns").add("crypto"),
  relevancy: 0
});

const galleryData = {
  galleryMap: galleryMap,
  sort: [{ imageId: "0001" }, { imageId: "0002" }, { imageId: "0003" }]
};

export { galleryData };
