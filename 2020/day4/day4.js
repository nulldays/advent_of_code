const { readFileSync } = require("fs");
const input = readFileSync("input.txt", {
  encoding: "UTF-8",
}).split("\n\n");

const FIELDS = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const VALIDFIELDS = {
	byr: x => (1920 <= parseInt(x) && parseInt(x) <= 2002),
	iyr: x => (2010 <= parseInt(x) && parseInt(x) <= 2020),
	eyr: x => (2020 <= parseInt(x) && parseInt(x) <= 2030),
	hgt: x => {
		let val = parseInt(x.substr(0, x.length-2));
		let unit = x.endsWith('cm')
		if (unit) { 
			return val >= 150 && val <= 193
		} else {
			return val >= 59 && val <= 76
		}
	},
	hcl: x => /^#[0-9a-f]{6}$/.test(x),
	ecl: x => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(x),
	pid: x => /^\d{9}$/.test(x),
	cid: x => true
};

function parseLine(line) {
    let obj = {}
	parameters = line.split(/\ |\\|\n/)

	parameters.forEach(i => {
		let tag, value;
		[tag, value] = i.split(":")
        obj[tag] = value
	});

    return obj
}

function validatePassport(passport) {

	const hasKeys = FIELDS.every(key => !!passport[key])
	if (!hasKeys) return false

	for (const [key, val] of Object.entries(passport)) {
		const valid = VALIDFIELDS[key](val)
		if (!valid) {
			return false
		}
	}

	return true
}


const passports = [];
input.forEach(i => {
	let p = parseLine(i)
	passports.push(p)
});


let part1 = 0;
let part2 = 0;

passports.forEach(passport => {
	const valid = validatePassport(passport);
	console.log(valid)
	if (valid) {
		part2 += 1
	}
});




console.log(`Part 2: ${part2}`)
