const filterMap = new Map();

filterMap.set("type", [
  { name: "illustration", selected: false },
  { name: "photoshop", selected: false },
  { name: "diagram", selected: false }
]);

filterMap.set("topics", [
  { name: "free speech", selected: false },
  { name: "decentralization", selected: false },
  { name: "censorship", selected: false },
  { name: "guns", selected: false },
  { name: "crypto", selected: false },
  { name: "vaxx", selected: false }
]);

filterMap.set("organizations", [
  { name: "federal reserve", selected: false },
  { name: "world economic forum", selected: false },
  { name: "world health organization", selected: false }
]);

filterMap.set("presidents", [
  { name: "joe biden", selected: false },
  { name: "donald trump", selected: false },
  { name: "vladimir putin", selected: false },
  { name: "xi jinping", selected: false }
]);

filterMap.set("villains", [
  { name: "tony fauci", selected: false },
  { name: "klaus shwab", selected: false }
]);

filterMap.set("heros", [
  { name: "joe rogan", selected: false },
  { name: "alex jones", selected: false },
  { name: "tucker carlson", selected: false }
]);

export { filterMap };
