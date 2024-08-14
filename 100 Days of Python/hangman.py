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

# TODO - create a list of random words (at least 50)
# TODO - Randomly choose a word out of the list above
random_word = None
filename = './data/dictionary.json'

with open(filename, 'r') as file:
    words_dict = json.load(file)

# Regular expression pattern to match only single words containing alphabetic characters
pattern = re.compile(r'^[A-Za-z]+$')

# Filter the dictionary keys to ensure they contain only single words (no space)
# (e.g. "norfolk spaniel")
valid_words = [key for key in words_dict.keys() if pattern.match(key)]

if valid_words:
    random_word = random.choice(valid_words)

# TODO - Based on length of the word, show _ underscores for each letter in the word
print(random_word)
print(len(random_word))

for _ in range(len(random_word)):
    print("_ ", end='')

# TODO - Ask user to guess a letter and assign their response to a variable. Make guess lowercase.
# TODO-3 - Check if the letter the user guessed  is one of the letters in the chosen_word. Print "Right" if it
#  is, "Wrong" if it's not.