# Day 7 - Hangman
import json
import random
import re

"""
The dictionary.json was used from WebstersEnglishDictionary Github project.

https://github.com/matthewreagan/WebstersEnglishDictionary?tab=readme-ov-file
Matt Reagan - Website: http://sound-of-silence.com/
Webster's Unabridged English Dictionary provided by Project Gutenberg

"""

random_word = None
filename = './data/dictionary.json'
placeholder = ""  # _ for each letter of the word
display = ""

with open(filename, 'r') as file:
    words_dict = json.load(file)

# Regular expression pattern to match only single words containing alphabetic characters
pattern = re.compile(r'^[A-Za-z]+$')

# Filter the dictionary keys to ensure they contain only single words (no space)
# (e.g. "norfolk spaniel")
valid_words = [key for key in words_dict.keys() if pattern.match(key)]

if valid_words:
    random_word = random.choice(valid_words)

print(random_word)
print(len(random_word))

placeholder += "_" * len(random_word)

print(placeholder)

user_guess = input("\nGo ahead and guess a letter out of this word: ").lower()

print(user_guess)

for letter in random_word:
    if letter == user_guess:
        display += letter
    else:
        display += "_"

print(display)
