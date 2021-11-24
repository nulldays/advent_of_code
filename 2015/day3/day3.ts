import { readFileSync } from 'fs'

type Vect = Array<number>
type Houses = Set<string>

type UpdateFunction = (curr: Vect) => Vect
interface Update {
    [key: string]: UpdateFunction
}

const update: Update = {
    '>': (curr: Vect) => [curr[0] + 1, curr[1]],
    '<': (curr: Vect) => [curr[0] - 1, curr[1]],
    '^': (curr: Vect) => [curr[0], curr[1] + 1],
    'v': (curr: Vect) => [curr[0], curr[1] - 1]
}

function partOne() {
    const data = readFileSync('input.txt', { encoding: 'utf-8' }).toString()
    const houses: Houses = new Set()

    let current: Vect = [0, 0]
    houses.add(current.toString())

    for (const move of data) {
        current = update[move](current)
        houses.add(current.toString())
    }

    return houses.size
}

function partTwo() {
    const data = readFileSync('input.txt', { encoding: 'utf-8' }).toString()
    const houses: Houses = new Set()

    let currentSanta: Vect = [0, 0]
    let currentRobot: Vect = [0, 0]
    houses.add(currentSanta.toString())

    for (let i = 0; i <data.length; i++) {
        const move = data[i]
        if (i % 2 == 0) {
            currentRobot = update[move](currentRobot)
            houses.add(currentRobot.toString())
        } else {
            currentSanta = update[move](currentSanta)
            houses.add(currentSanta.toString())
        }
    }
    
    return houses.size
}

console.log(`The solution for Part 1:\t${partOne()}`)
console.log(`The solution for Part 2:\t${partTwo()}`)
