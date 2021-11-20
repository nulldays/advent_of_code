#!/usr/bin/env python3


def get_box_area(l, w, h):
    return 2*l*w + 2*w*h + 2*h*l


def parse(string):
    values = string.split('x')
    return sorted(map(int, values))


def part_one():
    result = 0
    with open("input.txt") as text:
        for line in text:
            l, w, h = parse(line)
            result += get_box_area(l, w, h) + l*w
            # print(l, w, h)

    return result


def part_two():
    result = 0
    with open("input.txt") as text:
        for line in text:
            l, w, h = parse(line)
            ribbon = 2*l + 2*w
            bow = l * w * h
            result += bow + ribbon

    return result


if __name__ == '__main__':
    print(f'The Result of day 1 is: {part_one()}')
    print(f'The Result of day 2 is: {part_two()}')
