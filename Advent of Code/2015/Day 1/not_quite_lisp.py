with open("data.txt", "r") as file:
    str = file.read().replace("\n", "")


def which_floor_to_go(str):
    floor = 0
    pos = 0
    for char in str:
        if char == "(":
            floor += 1
        elif char == ")":
            floor -= 1
        pos +=1
        if floor == -1:
            return pos
    #return floor


print(which_floor_to_go(str)) # Part I: floor 280; Part II: position 1797


