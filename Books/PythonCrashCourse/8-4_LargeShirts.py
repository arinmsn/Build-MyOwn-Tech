def make_shirt(size="L", message="I love Python"):
    print(f'\nGreat! We will prepare to ship the *{size}* T-Shirt')
    print(f'message "{message}" printed on it.\n')

# default keywords
make_shirt()

make_shirt(size="M")
make_shirt(size="S", message="I love C++")

