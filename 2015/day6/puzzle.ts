import { readFileSync } from "fs";

interface instruction {
    startX: number,
    endX: number,
    startY: number,
    endY: number,
    operation: string
}

function parseInst(str: string): instruction {
    const reg = str.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);

    return  {
        operation: reg[1],
        startX: +parseInt(reg[2]),
        startY: +parseInt(reg[3]),
        endX: +parseInt(reg[4]),
        endY:  +parseInt(reg[5]),
    }
}

function execInst(inst: instruction, matrix: Uint8Array): void {
    for (let x = inst.startX; x <= inst.endX; x++) {
        for (let y = inst.startY; y <= inst.endY; y++) {

            const index = 1000 * x + y
            
            if (inst.operation === 'turn on') {
                matrix[index] += 1
            }
            if (inst.operation === 'turn off') {
                matrix[index] === 0 ? 0 : matrix[index] -= 1
            }
            if (inst.operation === 'toggle') {
                matrix[index] += 2
            }
        }
    }
}



const INPUT = readFileSync('./input.txt', {encoding: 'utf-8', flag: 'r'}).split('\n');
let LIGHTS = new Uint8Array(1000 * 1000)

INPUT.forEach(line => {
    const inst = parseInst(line);
    execInst(inst, LIGHTS)
})

let count = 0;
LIGHTS.forEach(i => {
    count += i 
})

console.log(`The number is: ${count}`);
