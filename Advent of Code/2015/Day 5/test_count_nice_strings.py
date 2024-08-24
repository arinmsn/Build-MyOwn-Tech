import unittest

from count_nice_strings_part1 import count_nice_string


class TestNiceString(unittest.TestCase):
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


if __name__ == "__main__":
    unittest.main()
