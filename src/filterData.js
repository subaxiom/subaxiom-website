const filterMap = new Map();

filterMap.set("Image Type", [
  { name: "illustration", selected: false },
  { name: "photoshop", selected: false },
  { name: "diagram", selected: false },
  { name: "abstract", selected: false }
]);

filterMap.set("Globalist Organizations", [
  { name: "davos group", selected: false },
  { name: "world economic forum", selected: false },
  { name: "world health organization", selected: false },
  { name: "world economic forum", selected: false },
  { name: "rockefeller foundation", selected: false },
  { name: "united nations", selected: false }
]);

filterMap.set("Agendas", [
  { name: "covid 19", selected: false },
  { name: "climate change", selected: false },
  { name: "black lives matter", selected: false },
  { name: "operation lockstep", selected: false },
  { name: "critical race theory", selected: false },
  { name: "build back better", selected: false },
  { name: "open borders", selected: false },
  { name: "great reset", selected: false }
]);

filterMap.set("Control & Tech", [
  { name: "censorship / free speech", selected: false },
  { name: "surveillance / privacy", selected: false },
  { name: "vaccine mandates / passports", selected: false },
  { name: "gun control / gun rights", selected: false },
  { name: "big tech / big data", selected: false },
  { name: "artificial intelligence (AI)", selected: false },
  { name: "virtual reality (VR)", selected: false },
  { name: "social credit scores", selected: false }
]);

filterMap.set("Economics", [
  { name: "inflation", selected: false },
  { name: "central banks", selected: false },
  { name: "crypto / blockchain", selected: false },
  { name: "gold", selected: false },
  { name: "wall street", selected: false }
]);

filterMap.set("People", [
  { name: "joe biden", selected: false },
  { name: "donald trump", selected: false },
  { name: "vladimir putin", selected: false },
  { name: "xi jinping", selected: false },
  { name: "george soros", selected: false },
  { name: "tony fauci", selected: false },
  { name: "klaus shwab", selected: false },
  { name: "bill gates", selected: false },
  { name: "joe rogan", selected: false },
  { name: "alex jones", selected: false },
  { name: "tucker carlson", selected: false }
]);

/*
filterMap.set("concepts", [
  { name: "austrian economics", selected: false },
  { name: "cantillon effect", selected: false },
  { name: "overton window", selected: false },
  { name: "modern monetary theory", selected: false },
]);
*/

export { filterMap };
