def find_smallest_two_numbers(length, width, height):
    smallest_side = min(length, width, height)

    if smallest_side == length:
        second_smallest = min(width, height)
    elif smallest_side == width:
        second_smallest = min(length, height)
    else:
        second_smallest = min(length, width)

    return smallest_side, second_smallest


def calculate_gift_wrapping_paper(length, width, height):
    smallest_side, second_smallest = find_smallest_two_numbers(length, width, height)

    extra_slack = smallest_side * second_smallest

    surface_area = (2 * length * width) + (2 * width * height) + (2 * height * length)
    final_wrapping_paper_size = surface_area + extra_slack

    return final_wrapping_paper_size


def calculate_ribbon_length_to_order(length, width, height):
    a, b = find_smallest_two_numbers(length, width, height)
    size_of_ribbon = (a + a + b + b)
    size_of_ribbon_bow = length * width * height
    total_size_of_ribbon = size_of_ribbon + size_of_ribbon_bow

    return total_size_of_ribbon


with open('data.txt', 'r') as file:
    total_wrapping_paper = 0
    total_ribbion_length = 0

    for line in file:
        # Remove trailing newline or spaces
        line = line.strip()

        length, width, height = line.split('x')

        length = int(length)
        width = int(width)
        height = int(height)

        total_wrapping_paper += calculate_gift_wrapping_paper(length, width, height)
        total_ribbion_length += calculate_ribbon_length_to_order(length, width, height)

    print(f"Total gift wrapping paper: {total_wrapping_paper}")  # Part I: 1606483
    print(f"Total ribbon length: {total_ribbion_length}")  # Part II: 3842356
