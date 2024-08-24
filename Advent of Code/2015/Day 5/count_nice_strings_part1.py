"""
Day 5

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
"""
with open("data.txt", "r") as file:
    # Read the input file line by line
    lines = file.read().splitlines()


def count_nice_string(input_string):
    vowels = ["a", "e", "i", "o", "u"]
    should_not_contain_list = ["ab", "cd", "pq", "xy"]
    count_num_of_vowels = 0
    has_double_letter = False
    has_disallowed_strings = False

    # Count the vowels
    for char in input_string:
        if char in vowels:
            count_num_of_vowels += 1

    # Check for double letters
    for i in range(len(input_string) - 1):
        if input_string[i] == input_string[i + 1]:
            has_double_letter = True
            break

    # Check the list of strings that are not allowed
    for substring in should_not_contain_list:
        if substring in input_string:
            has_disallowed_strings = True
            break

    # Determine if the string is nice
    is_str_nice = count_num_of_vowels >= 3 and has_double_letter and not has_disallowed_strings
    return is_str_nice


nice_strings_counter = sum(count_nice_string(line) for line in lines)

print(f"There are {nice_strings_counter} nice strings.")  # Part I: 236
