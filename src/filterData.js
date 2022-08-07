const filterMap = new Map();

filterMap.set("Topics", [
  { name: "agent provocateurs", code: "provoc", selected: false },
  { name: "antifa", code: "antifa", selected: false },
  { name: "authoritarianism", code: "author", selected: false },
  { name: "black lives matter", code: "blm", selected: false },
  { name: "censorship", code: "censor", selected: false },
  { name: "central banks", code: "fed", selected: false },
  { name: "climate change", code: "climate", selected: false },
  { name: "covid-19", code: "covid", selected: false },
  { name: "crypto", code: "crypto", selected: false },
  { name: "energy", code: "energy", selected: false },
  { name: "eugenics", code: "eugen", selected: false },
  { name: "fake news", code: "fnews", selected: false },
  { name: "false flags", code: "fflags", selected: false },
  { name: "famine", code: "famine", selected: false },
  { name: "food supply", code: "food", selected: false },
  { name: "free speech", code: "speech", selected: false },
  { name: "genocide", code: "geno", selected: false },
  { name: "globalists", code: "glob", selected: false },
  { name: "great reset", code: "greset", selected: false },
  { name: "groupthink", code: "gthink", selected: false },
  { name: "gun rights", code: "guns", selected: false },
  { name: "human trafficking", code: "htraf", selected: false },
  { name: "immigration", code: "immig", selected: false },
  { name: "inflation", code: "infla", selected: false },
  { name: "the matrix", code: "matrix", selected: false },
  { name: "mass surveillance", code: "msurv", selected: false },
  { name: "nanotech", code: "nano", selected: false },
  { name: "new world order", code: "nwo", selected: false },
  { name: "plandemics", code: "pland", selected: false },
  { name: "population control", code: "pop", selected: false },
  { name: "privacy", code: "priv", selected: false },
  { name: "racism", code: "race", selected: false },
  { name: "social credit scores", code: "scs", selected: false },
  { name: "social media", code: "smedia", selected: false },
  { name: "supply chain", code: "schain", selected: false },
  { name: "transhumanism", code: "thuman", selected: false },
  { name: "vaccines", code: "vax", selected: false },
  { name: "war", code: "war", selected: false },
  { name: "woke", code: "woke", selected: false },
  { name: "world economic forum", code: "wef", selected: false },
  { name: "world health organization", code: "who", selected: false }
]);

filterMap.set("People", [
  { name: "adolf hitler", code: "ahitler", selected: false },
  { name: "albert bourla", code: "abourla", selected: false },
  { name: "alex jones", code: "ajones", selected: false },
  { name: "alexandria ocasio-cortez", code: "aocortez", selected: false },
  { name: "bill clinton", code: "bclinton", selected: false },
  { name: "bill gates", code: "bgates", selected: false },
  { name: "chuck schumer", code: "cschumer", selected: false },
  { name: "donald trump", code: "dtrump", selected: false },
  { name: "gavin newsom", code: "gnewsom", selected: false },
  { name: "george soros", code: "gsoros", selected: false },
  { name: "gretchen whitmer", code: "gwhitmer", selected: false },
  { name: "jeff bezos", code: "jbezos", selected: false },
  { name: "jeffrey epstein", code: "jepstein", selected: false },
  { name: "jerome powell", code: "jpowell", selected: false },
  { name: "joe biden", code: "jbiden", selected: false },
  { name: "joe rogan", code: "jrogan", selected: false },
  { name: "justin trudeau", code: "jtrudeau", selected: false },
  { name: "hillary clinton", code: "hclinton", selected: false },
  { name: "kamala harris", code: "tfauci", selected: false },
  { name: "klaus schwab", code: "kschwab", selected: false },
  { name: "lori lightfoot", code: "llightfoot", selected: false },
  { name: "mark zuckerberg", code: "mzuckerberg", selected: false },
  { name: "nancy pelosi", code: "npelosi", selected: false },
  { name: "robert malone", code: "rmalone", selected: false },
  { name: "tony fauci", code: "tfauci", selected: false },
  { name: "tucker carlson", code: "tcarlson", selected: false },
  { name: "vladimir putin", code: "vputin", selected: false },
  { name: "xi jinping", code: "xjinping", selected: false },
  { name: "yuval noah harari", code: "yharari", selected: false }
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
