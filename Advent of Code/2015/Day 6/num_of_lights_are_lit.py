# Setting up the grid
grid_size = 10 # 10x10 grid
# A light that is turned off is 0 and a turned on one is 1
grid = [[0 for _ in range(grid_size)] for _ in range(grid_size)]

def apply_instructions_for_lights(grid, instruction):
	action, start, end = instruction
	x1, y1 = start
	x2, y2 = end

	for i in range(x1, x2 + 1):
		for j in range(y1, y2 + 1):
			if action == "turn on":
				grid[i][j] = 1
			elif action  == "turn off":
				grid[i][j] == 0
			elif action == "toggle"
				grid[i][j] = 1 - grid[i][j]

instructions = [
    ("turn on", (0, 0), (2, 2)),  # Turn on a 3x3 block
    ("toggle", (1, 1), (3, 3)),   # Toggle a 3x3 block
    ("turn off", (0, 0), (1, 1))  # Turn off a 2x2 block
]

for instruction in instructions:
	apply_instructions_for_lights(grid, instruction)

lights_lit = sum(sum(row) for row in grid)

print(f"Lights that are lit: {lights_lit}")