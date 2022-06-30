import img1 from "./gallery/BidenOffersNeoChoices.jpg";
import gab from "./gallery/BidenPigletXiPooh2.jpg";
import img3 from "./gallery/FauciAsFreddy.jpg";
//import img3 from "https://ipfs.pixura.io/ipfs/QmUyARmq5RUJk5zt7KUeaMLYB8SQbKHp3Gdqy5WSxRtPNa/SeaofRoses.jpg";

const galleryMap = new Map();

galleryMap.set("0001", {
  src:
    'url("https://ipfs.pixura.io/ipfs/QmUyARmq5RUJk5zt7KUeaMLYB8SQbKHp3Gdqy5WSxRtPNa/SeaofRoses.jpg")',
  title: "Biden Secures Wrong Border",
  tags: new Set().add("joe biden").add("tony fauci"),
  relevancy: 0
});
galleryMap.set("0002", {
  src:
    'url("https://ipfs.pixura.io/ipfs/QmUyARmq5RUJk5zt7KUeaMLYB8SQbKHp3Gdqy5WSxRtPNa/SeaofRoses.jpg")',
  title: "Biden Offers Neo Red Pill / Blue Pill",
  tags: new Set().add("joe biden").add("matrix").add("guns").add("crypto"),
  relevancy: 0
});
galleryMap.set("0003", {
  src:
    'url("https://ipfs.pixura.io/ipfs/QmUyARmq5RUJk5zt7KUeaMLYB8SQbKHp3Gdqy5WSxRtPNa/SeaofRoses.jpg")',
  title: "Biden Offers Neo Red Pill / Blue Pill",
  tags: new Set().add("joe biden").add("matrix").add("guns").add("crypto"),
  relevancy: 0
});

const galleryData = {
  galleryMap: galleryMap,
  sort: [{ imageId: "0001" }, { imageId: "0002" }, { imageId: "0003" }]
};

export { galleryData };
