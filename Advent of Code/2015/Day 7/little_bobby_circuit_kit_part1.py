from collections import defaultdict

with open('data.txt', 'r') as file:
    instructions = file.read().splitlines()


class Circuit:
    def __init__(self):
        self.wires = defaultdict(lambda: None)
        self.instructions = {}

    def add_instruction(self, instruction):
        parts = instruction.split(' -> ')
        output_wire = parts[1]
        input_parts = parts[0].split()

        if len(input_parts) == 1:
            self.instructions[output_wire] = ('VALUE', input_parts[0])
        elif len(input_parts) == 2:
            self.instructions[output_wire] = ('NOT', input_parts[1])
        else:
            self.instructions[output_wire] = (input_parts[1], input_parts[0], input_parts[2])

    def get_signal(self, wire):
        if wire.isdigit():
            return int(wire)

        if wire not in self.wires:
            instruction = self.instructions[wire]

            if instruction[0] == 'VALUE':
                value = self.get_signal(instruction[1])
            elif instruction[0] == 'NOT':
                value = ~self.get_signal(instruction[1]) & 0xFFFF
            elif instruction[0] == 'AND':
                value = self.get_signal(instruction[1]) & self.get_signal(instruction[2])
            elif instruction[0] == 'OR':
                value = self.get_signal(instruction[1]) | self.get_signal(instruction[2])
            elif instruction[0] == 'LSHIFT':
                value = (self.get_signal(instruction[1]) << int(instruction[2])) & 0xFFFF
            elif instruction[0] == 'RSHIFT':
                value = self.get_signal(instruction[1]) >> int(instruction[2])

            self.wires[wire] = value

        return self.wires[wire]


circuit = Circuit()

for instruction in instructions:
    circuit.add_instruction(instruction)

signal_on_a = circuit.get_signal('a')

print("Signal on wire 'a' contains: ", signal_on_a)  # Part I: 16076
