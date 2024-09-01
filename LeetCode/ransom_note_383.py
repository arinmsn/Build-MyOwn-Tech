"""
Given two strings ransomNote and magazine, return true if ransomNote can
be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.


Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
"""
from utils.Python.benchmark_function import benchmark_function
from collections import Counter


def can_construct(ransomNote: str, magazine: str) -> bool:
    # Create a dictionary to count frequencies of characters in the magazine
    magazine_count = {}

    for char in magazine:
        if char in magazine_count:
            magazine_count[char] += 1
        else:
            magazine_count[char] = 1

    # Traverse the randsomeNote and check against the magazine_count
    for char in ransomNote:
        if char in magazine_count and magazine_count[char] > 0:
            magazine_count[char] -= 1
        else:
            return False

    # All characters were matched
    return True


def can_construct_counter_version(ransomNote: str, magazine: str) -> bool:
    ransom_counter = Counter(ransomNote)
    magazine_counter = Counter(magazine)

    # Check if for every character in ransomNote,
    # magazine has enough of that character
    for char, count in ransom_counter.items():
        if magazine_counter[char] < count:
            return False

    return True


benchmark_function(can_construct, "aabb", "aabbbb")
# benchmark_function(can_construct_counter_version, "aabb", "aabbbb")

"""
Time taken: 0.01410 ms
Memory usage: 0.00000 KB -- 0.00000 MB
Peak memory usage: 0.04688 KB -- 0.00005 MB

can_construct_2() - Using collection.Counter()
Time taken: 0.07300 ms
Memory usage: 2.03418 KB -- 0.00199 MB
Peak memory usage: 2.33105 KB -- 0.00228 MB

can_construct() 
Time complexity: O(m + n) - where m is the length of ransom note string and n is the length of magazine string
Space complexity: O(n) - we are storing the frequencies of characters in the magazine in a dictionary.

can_construct_2() - Using collection.Counter()
Time complexity: O(m + n) overall.
Space complexity: O(m + n) since we are creating Counter objects for both strings.
"""
