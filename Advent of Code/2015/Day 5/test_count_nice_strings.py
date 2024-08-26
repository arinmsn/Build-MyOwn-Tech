import unittest

from count_nice_strings_part1 import count_nice_string
from count_nice_strings_part2 import count_nice_string_part2

class TestNiceStringPart1(unittest.TestCase):
    def test_nice_string_contains_one_letter_appearing_twice_in_a_row(self):
        self.assertTrue(count_nice_string("aaebbccedd"))

    def test_nice_string(self):
        self.assertTrue(count_nice_string("ugknbfddgicrmopn"))
        self.assertTrue(count_nice_string("aaa"))

    def test_naughty_string(self):
        self.assertFalse(count_nice_string("jchzalrnumimnmhp"))
        self.assertFalse(count_nice_string("haegwjzuvuyypxyu"))
        self.assertFalse(count_nice_string("dvszwmarrgswjxmb"))
        self.assertFalse(count_nice_string("aeiouaeiouaeiou"))

class TestNiceStringPart2(unittest.TestCase):
    def test_nice_string_part2(self):
        self.assertTrue(count_nice_string_part2("qjhvhtzxzqqjkmpb"))
        self.assertFalse(count_nice_string_part2("uurcxstgmygtbstg"))
        self.assertFalse(count_nice_string_part2("ieodomkazucvgmuy"))

if __name__ == "__main__":
    unittest.main()
