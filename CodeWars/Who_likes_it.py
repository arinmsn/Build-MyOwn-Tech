"""
You probably know the "like" system from Facebook and other pages. People can
"like" blog posts, pictures or other items. We want to create the text that
should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input
array, containing the names of people who like an item. It must return the
display text as shown in the examples:

likes([]) # must be "no one likes this"
likes(["Peter"]) # must be "Peter likes this"
likes(["Jacob", "Alex"]) # must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) # must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) # must be "Alex, Jacob and 2 others like this"
"""

def likes(names):
    # if len(names) == 0
    if not names:
        return "no one likes this"
    elif len(names) == 1:
        return "{} likes this".format(names[0])
    elif len(names) == 2:
        return names[0] + " and " + names[1] + " like this"
    elif len(names) == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return "{}, {} and {} others like this".format(names[0], names[1], (len(names)-2) )

print("First solution\n----------------------")
print(likes([]))
print(likes(['Bob']))
print(likes(['Marie', 'Johnson']))
print(likes(['Robert', 'Vernis', 'Carolina']))
print(likes(['Alexander', 'Kristine', 'Suzane', 'Sebastian']))

# another solution
def likes(names):
    n = len(names)
    return {
        0: 'no one likes this',
        1: '{} likes this',
        2: '{} and {} like this',
        3: '{}, {}, and {} like this',
        4: '{}, {}, and {thisMany} others likes this'
    }[min(4, n)].format(*names[:3], thisMany=n-2)

print("\nSecond solution\n----------------------")
print(likes([]))
print(likes(['Bob']))
print(likes(['Marie', 'Johnson']))
print(likes(['Robert', 'Vernis', 'Carolina']))
print(likes(['Alexander', 'Kristine', 'Suzane', 'Sebastian']))