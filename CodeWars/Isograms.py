# An isogram is a word that has no repeating letters,
# consecutive or non-consecutive.
# Implement a function that determines whether a string
# that contains only letters is an isogram.
# Assume the empty string is an isogram. Ignore letter case.

# import collections

def is_isogram(string):
    
    # results = collections.Counter(string)
    # for char, counts in results.items():
    #     if counts > 1:
    #         return False
    # return True
    ##########################################

    # def is_isogram(string):
    #     return len(string) == len(set(string.lower()))

    string = string.lower()
    for char in string:
        if string.count(char) > 1:
            return False
    return True

is_isogram("accomplishment")
# is_isogram("countryside")