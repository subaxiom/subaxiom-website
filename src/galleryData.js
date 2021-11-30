import img1 from "./gallery/BidenAndFauciSecureHospitals.jpg";
import gab from "./gallery/BidenOffersNeoChoices.jpg";

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

const galleryData = {
  galleryMap: galleryMap,
  sort: [{ imageId: "0001" }, { imageId: "0002" }]
};

export { galleryData };
