const filterMap = new Map();

filterMap.set("type", [
  { name: "illustration", selected: false },
  { name: "photoshop", selected: false },
  { name: "diagram", selected: false },
  { name: "abstract", selected: false }
]);

filterMap.set("good", [
  { name: "free speech", selected: false },
  { name: "privacy", selected: false },
  { name: "decentralization", selected: false }
]);

filterMap.set("bad", [
  { name: "censorship", selected: false },
  { name: "surveillance", selected: false },
  { name: "inflation", selected: false },
  { name: "vaxx mandates", selected: false }
]);

filterMap.set("tools", [
  { name: "guns", selected: false },
  { name: "crypto", selected: false },
  { name: "blockchain", selected: false },
  { name: "precious metals", selected: false }
]);

filterMap.set("organizations", [
  { name: "central banks", selected: false },
  { name: "world economic forum", selected: false },
  { name: "world health organization", selected: false },
  { name: "rockefeller foundation", selected: false }
]);

filterMap.set("presidents", [
  { name: "joe biden", selected: false },
  { name: "donald trump", selected: false },
  { name: "vladimir putin", selected: false },
  { name: "xi jinping", selected: false }
]);

filterMap.set("villains", [
  { name: "george soros", selected: false },
  { name: "tony fauci", selected: false },
  { name: "klaus shwab", selected: false },
  { name: "bill gates", selected: false }
]);

filterMap.set("heros", [
  { name: "joe rogan", selected: false },
  { name: "alex jones", selected: false },
  { name: "tucker carlson", selected: false }
]);

export { filterMap };
