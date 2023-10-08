import siteIconSprite_1 from "./img/siteIconSprite_1.png";
import siteIconSprite_2 from "./img/siteIconSprite_2.png";

const siteIconMap = new Map();

siteIconMap.set("unknown", {
  thumbnailSrc: siteIconSprite_1,
  thumbnailX: 0,
  thumbnailY: 0
});

siteIconMap.set("comedy", {
  thumbnailSrc: siteIconSprite_1,
  thumbnailX: 25,
  thumbnailY: 0
});

siteIconMap.set("crime drama, comedy", {
  thumbnailSrc: siteIconSprite_1,
  thumbnailX: 50,
  thumbnailY: 0
});

siteIconMap.set("drama", {
  thumbnailSrc: siteIconSprite_1,
  thumbnailX: 75,
  thumbnailY: 0
});

siteIconMap.set("western, comedy", {
  thumbnailSrc: siteIconSprite_1,
  thumbnailX: 100,
  thumbnailY: 0
});

siteIconMap.set("musical", {
  thumbnailSrc: siteIconSprite_2,
  thumbnailX: 125,
  thumbnailY: 0
});

siteIconMap.set("family", {
  thumbnailSrc: siteIconSprite_2,
  thumbnailX: 150,
  thumbnailY: 0
});

siteIconMap.set("action", {
  thumbnailSrc: siteIconSprite_2,
  thumbnailX: 175,
  thumbnailY: 0
});

const sortArray = [];
for (let i = 0; i < siteIconMap.size; i++) {
  sortArray.push({ imageId: String(siteIconMap.size - i).padStart(4, "0") });
}

//alert(siteIconMap.size);
//alert(JSON.stringify(sortArray));

const siteIconData = {
  siteIconMap: siteIconMap,
  sort: sortArray
};

export { siteIconData };
