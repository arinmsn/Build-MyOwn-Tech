# Start with your work from Exercise 8-10. Call the
# function make_great() with a copy of the list of magicians’ names. Because the
# original list will be unchanged, return the new list and store it in a separate list.
# Call show_magicians() with each list to show that you have one list of the origi-
# nal names and one list with the Great added to each magician’s name.
magicians = ["Albus Dumbledor","Lord Voldemort","Newt Scamander","Harry Potter","Sirius Black","Mad-Eye Moody"]

def show_magicians():
    for m in magicians:
        m = magicians.split(',')
    print("---- Original list of magicians ----")
    print(m + "\n")

def make_great(magician):
    print("---- Great magicians ----")
    for m in magician:
        print(f'Great {m}')
    # if a list is passed, use that, otherwise use .split()

show_magicians()



# show_magicians()
# show two lists, original names,
# and the other list with Great+name of maigician