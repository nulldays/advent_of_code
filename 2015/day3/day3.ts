import { readFile } from 'fs'

interface Houses {
    [index: string]: number
}


const update = {
    '>': (xy: Array<number>) => [xy[0] + 1, xy[1]],
    '<': (xy: Array<number>) => [xy[0] - 1, xy[1]],
    '^': (xy: Array<number>) => [xy[0], xy[1] + 1],
    'v': (xy: Array<number>) => [xy[0], xy[1] - 1]
}

const addVisit = (houses: Houses, vect: string): void => {
    if (houses[vect]) {
        houses[vect] += 1;
    } else {
        houses[vect] = 1
    }
}


readFile('input.txt', (err, data) => {
    const houses: Houses = {}

    let current = [0, 0]

    const path = data.toString()

    for (const h of path) {
        const currentStr = current.toString()
        addVisit(houses, currentStr)
        current = update[h](current)
    }

    console.log(Object.keys(houses).length)
})
