with open("data.txt", "r") as file:
    directions = file.read().replace("\n", "")


def count_houses_with_presents_part2(directions):
    # Initial position
    santa_x, santa_y = 0, 0
    robo_santa_x, robo_santa_y = 0, 0

    visited_houses = set()
    visited_houses.add((santa_x, santa_y))  # Initial starting location

    for i, direction in enumerate(directions):
        # Santa's move
        if i % 2 == 0:
            # Moving north
            if direction == "^":
                santa_y += 1
            # Moving south
            elif direction == "v":
                santa_y -= 1
            # Moving east
            elif direction == ">":
                santa_x += 1
            # Moving west
            elif direction == "<":
                santa_x -= 1

            visited_houses.add((santa_x, santa_y))

        else:
            # Robo-Santa's move
            # Moving north
            if direction == "^":
                robo_santa_y += 1
            # Moving south
            elif direction == "v":
                robo_santa_y -= 1
            # Moving east
            elif direction == ">":
                robo_santa_x += 1
            # Moving west
            elif direction == "<":
                robo_santa_x -= 1

        # Add Robo-Santa's new position to the set of visited houses
        visited_houses.add((robo_santa_x, robo_santa_y))

    # Unique houses visited
    return len(visited_houses)


# print(count_houses_with_presents(directions))  # Part I: 2592
print(count_houses_with_presents_part2(directions)) # Part II: 2360
