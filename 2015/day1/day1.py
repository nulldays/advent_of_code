#!/usr/bin/env python3

def part_one(inp):
    current_floor = 0
    for i, move in enumerate(inp):
        if move == '(':
            current_floor += 1
        elif move == ')':
            current_floor -= 1

    return current_floor


def part_two(inp):
    current_floor = 0
    basement = 0

    for i, move in enumerate(inp):
        if move == '(':
            current_floor += 1
        elif move == ')':
            current_floor -= 1

        if current_floor == -1 and basement == 0:
            basement = i + 1
            return basement


if __name__ == "__main__":
    puzzle = ""
    with open('input.txt', 'r') as file:
        puzzle += file.read()

    print(f'The solution of the 1º part: {part_one(puzzle)}')
    print(f'The solution of the 2º part: {part_two(puzzle)}')
