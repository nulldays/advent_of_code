const { readFileSync } = require('fs')

const INPUT = readFileSync('./input.txt', { encoding: 'utf-8' }).split(', ')
const DIRECTIONS = ['N', 'E', 'S', 'W']

function parseDirection(str) {
  const rotation = str[0]
  const value = Number(str.slice(1))
  return {
    rotation,
    value,
  }
}
function turn(current, change) {
  if (change === 'R') {
    return (current + 1) % DIRECTIONS.length
  } else {
    return (current + 3) % DIRECTIONS.length
  }
}

let currPosition = {
  x: 0,
  y: 0,
  direction: 0,
}

const move = {
  N: (val) => (currPosition.y += val),
  E: (val) => (currPosition.x += val),
  S: (val) => (currPosition.y -= val),
  W: (val) => (currPosition.x -= val),
}

INPUT.forEach((line) => {
  const { rotation, value } = parseDirection(line)
  currPosition.direction = turn(currPosition.direction, rotation)

  move[DIRECTIONS[currPosition.direction]](value)
})

console.log(currPosition)

console.log(
  `The final distance is: ${
    Math.abs(currPosition.x) + Math.abs(currPosition.y)
  }`,
)