const { readFileSync } = require("fs");

const input = readFileSync("input.txt", {
  encoding: "UTF-8",
}).split("\n");

const parseLine = (line) => {
  let result = "";
  for (const i of line) {
    if (i == "B" || i == "R") {
      result += "1";
    } else if (i == "F" || i == "L") {
      result += "0";
    }
  }
  return result;
};

const seatID = (bnum) => {
  let row = parseInt(bnum.slice(0, 7), 2);
  let col = parseInt(bnum.slice(-3), 2);
  return row * 8 + col;
};

let ids = [];
let myId = -1;

input.forEach((i) => {
  let code = parseLine(i);
  let id = seatID(code);
  ids.push(id);
});

ids.sort();
const highestID = Math.max(...ids);

for (let i = 0; i < highestID; i++) {
  if (!ids.includes(i) && ids.includes(i + 1) && ids.includes(i - 1)) {
    myId = i;
    break;
  }
}

console.log(`The max id is ${highestID}`);
console.log(`My id is ${myId}`);
