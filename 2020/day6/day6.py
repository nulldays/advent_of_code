def countQuestionsAllAnswered(data):
    counts = 0
    for line in data:
        cum = set()
        spl = line.split("\n")
        start = True
        for i in spl:
            curr = set()
            for c in i:
                curr.add(c)
            if start:
                cum = curr
                start = False
            else:
                cum = cum.intersection(curr)
        counts += len(cum)
    return counts

with open("input.txt", 'r') as inp:
    rawdata = inp.read()
    data = rawdata.split("\n\n")
    sum_ = countQuestionsAllAnswered(data)
    print(sum_)