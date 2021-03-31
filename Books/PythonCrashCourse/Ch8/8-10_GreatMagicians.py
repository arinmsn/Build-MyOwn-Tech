# Start with a copy of your program from Exercise 8-9.
# Write a function called make_great() that modifies the list of magicians by add-
# ing the phrase the Great to each magician’s name. Call show_magicians() to
# see that the list has actually been modified.

def show_magicians(magicians):
    magician = magicians.split(',')
    make_great(magician)

def make_great(magician):
    for m in magician:
        print(f'Great {m}')
    # if a list is passed, use that, otherwise use .split()

# magicians = ["Harry Potter"]
# show_magicians(show_magicians)
show_magicians("Albus Dumbledor,Lord Voldemort,Newt Scamander,Harry Potter,Sirius Black,Mad-Eye Moody")

# show_magicians()