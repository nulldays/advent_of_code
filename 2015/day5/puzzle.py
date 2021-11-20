
# contains at least 3 vowels (aeiou)
# at least one letter repeats twice (xx, yy, aa)
# does not contain ab, cd, pq, or xy

from os import nice
import re


def isNice(word):
    return (
        re.search(r'(..).*\1', word)
        and re.search(r'(.).\1', word)
    )


nice_count = 0
with open('input.txt', 'r') as f:
    for line in f.readlines():
        if isNice(line.strip()):
            nice_count+= 1
        
print(nice_count)