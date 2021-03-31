# Make a list of magician’s names. Pass the list to a function
# called show_magicians() , which prints the name of each magician in the list.

def show_magicians(magicians):
    magician = magicians.split(',')
    print(magician)

    # if a list is passed, use that, otherwise use .split()

# magicians = ["Harry Potter"]
# show_magicians(show_magicians)
show_magicians("Albus Dumbledor, Lord Voldemort, Newt Scamander,Harry Potter, Sirius Black, Mad-Eye Moody")