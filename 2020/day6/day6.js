const { readFileSync } = require("fs");

const input = readFileSync("input.txt", {
	encoding: "UTF-8",
}).split("\n\n");

const parseGroupsPart1 = (line) => {
	let gp = new Set();

	line.split("\n").forEach((item) => {
		for (const letter of item) {
			gp.add(letter);
		}
	});

	return gp;
};

const intersection = (setA, setB) => {
	let _intersection = new Set()
	for (let elem of setB) {
		if (setA.has(elem)) {
			_intersection.add(elem)
		}
	}
	return _intersection
}

const parseGroupsPart2 = (line) => {

	let people = []
	let gp = new Set();

	line.split("\n").forEach((item) => {
		let person = new Set();

		for (const letter of item) {
			person.add(letter);
		}
		people.push(person)
	});

	if (people.length != 1) {
		return people.reduce((acc, curr) => intersection(acc, curr))
	} else {
		return people[0]
	}

};

let group1 = [];
input.forEach((line) => group1.push(parseGroupsPart1(line)));

let p1 = 0;
for (const item of group1) {
	p1 += item.size;
}

let group2 = [];
input.forEach((line) => group2.push(parseGroupsPart2(line)));

let p2 = 0;
for (const item of group2) {
	p2 += item.size;
}

console.log(`Part 1: ${p1}`);
console.log(`Part 2: ${p2}`);