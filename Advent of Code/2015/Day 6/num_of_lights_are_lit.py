with open("data.txt", "r") as file:
    lines = file.read().splitlines()

instructions = []

for line in lines:
    parts = line.split()
    action = parts[0] + " " + parts[1] if parts[0] == "turn" else parts[0]
    start_coordinate = tuple(map(int, parts[-3].split(',')))
    end_coordinate = tuple(map(int, parts[-1].split(',')))
    instructions.append((action, start_coordinate, end_coordinate))

# Setting up the grid
grid_size = 1000  # 1000x1000 grid
# A light that is turned off is 0 and a turned on one is 1
grid = [[0 for _ in range(grid_size)] for _ in range(grid_size)]


def apply_instructions_for_lights(light_grid, light_instruction):
    action_type, start, end = light_instruction
    x1, y1 = start
    x2, y2 = end

    for i in range(x1, x2 + 1):
        for j in range(y1, y2 + 1):
            if action_type == "turn on":
                light_grid[i][j] = 1
            elif action_type == "turn off":
                light_grid[i][j] = 0
            elif action_type == "toggle":
                light_grid[i][j] = 1 - light_grid[i][j]


for instruction in instructions:
    apply_instructions_for_lights(grid, instruction)

lights_lit = sum(sum(row) for row in grid)

print(f"Lights that are lit: {lights_lit}")  # Part I: 543903
