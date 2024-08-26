"""
Day 5

Now, a nice string is one with all of the following properties:

    It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy)
    or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).

    It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
"""
with open("data.txt", "r") as file:
    # Read the input file line by line
    lines = file.read().splitlines()


def count_nice_string_part2(input_string):
    two_letters_repeated = False # Two letters should appear at least twice
    one_letter_between_two_letters = False

    # Check for repeated pairs
    for i in range(len(input_string) - 3):
        pair = input_string[i:i+2]
        if pair in input_string[i+2:]:
            two_letters_repeated = True
            break

    # Check for repeating letters with one number between them
    for i in range(len(input_string) - 2):
        if input_string[i] == input_string[i+2]:
            one_letter_between_two_letters = True
            break

    # Determine if the string is nice
    is_str_nice = one_letter_between_two_letters and two_letters_repeated
    return is_str_nice


nice_strings_counter = sum(count_nice_string_part2(line) for line in lines)

print(f"There are {nice_strings_counter} nice strings.")  # Part II: 51
