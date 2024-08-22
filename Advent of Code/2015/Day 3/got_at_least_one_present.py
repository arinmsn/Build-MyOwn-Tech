with open("data.txt", "r") as file:
    directions = file.read().replace("\n", "")


def count_houses_with_presents(directions):
    # Santa's initial position
    x, y = 0, 0

    visited_houses = set()
    visited_houses.add((x, y))  # Initial starting location

    for direction in directions:
        # Moving north
        if direction == "^":
            y += 1
        # Moving south
        elif direction == "v":
            y -= 1
        # Moving east
        elif direction == ">":
            x += 1
        # Moving west
        elif direction == "<":
            x -= 1

        visited_houses.add((x, y))

    # Unique houses visited
    return len(visited_houses)


print(count_houses_with_presents(directions))  # Part I: 2592
