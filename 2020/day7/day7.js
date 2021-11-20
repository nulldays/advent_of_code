const fs = require("fs");

let rules = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n");

var countSet = new Set();

var tree = [];

var getBag = (parentBag, count) => {
  var bagReg = new RegExp(`${parentBag}\\sbag[s]?\\scontain`, "i");

  return rules
    .filter((r) => r.match(bagReg))
    .map((r) => {
      var childrenBags = r.split("contain")[1].split(",");
      return childrenBags.map((c) => {
          var child = c.match(/([0-9]+)\s([a-z\s]*)\sbag/i);
          if (child) {
            tree.push({
              count: Number(child[1]),
              total: Number(child[1]) * count,
              bag: child[2],
              parentBag,
            });
            getBag(child[2], Number(child[1]) * count);
          }
        }).flat();
    }).flat();
};

getBag("shiny gold", 1);
var bagCnt = 0;
tree.forEach((t) => (bagCnt += t.total));

console.log(bagCnt);
