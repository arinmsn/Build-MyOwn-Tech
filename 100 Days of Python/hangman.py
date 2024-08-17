# Day 7 - Hangman
import json
import random
import re
from hangman_art import stages, logo

"""
The dictionary.json was used from WebstersEnglishDictionary Github project.

https://github.com/matthewreagan/WebstersEnglishDictionary?tab=readme-ov-file
Matt Reagan - Website: http://sound-of-silence.com/
Webster's Unabridged English Dictionary provided by Project Gutenberg

"""
print(logo)

random_word = None
filename = './data/dictionary.json'
placeholder = ""  # _ for each letter of the word
display = ""
lives = 6
game_over = False
correct_letters = []

with open(filename, 'r') as file:
    words_dict = json.load(file)

# Regular expression pattern to match only single words containing alphabetic characters
pattern = re.compile(r'^[A-Za-z]+$')

# Filter the dictionary keys to ensure they contain only single words (no space)
# (e.g. "norfolk spaniel")
valid_words = [key for key in words_dict.keys() if pattern.match(key)]

if valid_words:
    random_word = random.choice(valid_words)

placeholder += "_" * len(random_word)

print(placeholder)

while not game_over:
    print(f"\n  --------   {lives}/6 lives left    --------")
    user_guess = input("Go ahead and guess a letter out of this word: ").lower()

    if user_guess in correct_letters:
        print(f"Looks like you have already guessed {user_guess}.")

    display = ""

    for letter in random_word:
        if letter == user_guess:
            display += letter
            correct_letters.append(letter)
        elif letter in correct_letters:
            display += letter
        else:
            display += "_"

    print(display)

    if user_guess not in random_word:
        lives -= 1
        print(f"You guessed {user_guess}, but that's not in the word. You lose a life!")
        if lives == 0:
            game_over = True
            print("You lose! Better luck next time.")
            print(f"The correct word was {random_word}")

    if "_" not in display:
        game_over = True
        print("You won!")

    print(stages[lives])
