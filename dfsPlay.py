graph = {}

inputList = [("H", 3), ("H", 4), ("S", 4), ("D", 5), ("D", 1)]
count = 0
graph[0] = [inputList[0]]
print(graph)
for i in inputList:
    node = i[0]
    num = i[1]
    if(node == graph[count][0] or num == graph[count][1]):
        graph[count].append(i)
    else:
        graph[count] = [i]
    count+=1

print(graph)