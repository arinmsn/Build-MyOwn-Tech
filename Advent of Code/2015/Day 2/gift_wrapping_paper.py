def calculate_gift_wrapping_paper(length, width, height):
    smallest_side = min(length, width, height)

    if smallest_side == length:
        second_smallest = min(width, height)
    elif smallest_side == width:
        second_smallest = min(length, height)
    else:
        second_smallest = min(length, width)

    extra_slack = smallest_side * second_smallest

    surface_area = (2*length*width) + (2*width*height) + (2*height*length)
    final_wrapping_paper_size = surface_area + extra_slack

    return final_wrapping_paper_size


with open('data.txt', 'r') as file:
    total = 0
    for line in file:
        # Remove trailing newline or spaces
        line = line.strip()

        length, width, height = line.split('x')

        length = int(length)
        width = int(width)
        height = int(height)

        total += calculate_gift_wrapping_paper(length, width, height)

    print(f"Total gift wrapping paper: {total}") # Part I: 1606483



