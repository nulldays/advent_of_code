import { readFile } from 'fs'

interface Houses {
    [index: string]: number
}

type entity = Array<number>

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

const move = (houses: Houses, entity: entity, movement: string): entity => {
    const currentStr = entity.toString()
    addVisit(houses, currentStr)
    return update[movement](entity)
}


readFile('input.txt', (err, data) => {

    const houses: Houses = {}
    let currentSanta = [0, 0]
    let currentRobot = [0, 0]

    const path = data.toString()

    for (let i = 0; i < path.length; i++){
        if (i % 2 == 0) {
            currentSanta = move(houses, currentSanta, path[i])
        } else {
            currentRobot = move(houses, currentRobot, path[i])
        }
    }

    console.log(Object.keys(houses).length)
})
