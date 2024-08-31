import unittest

from LeetCode.valid_palindrome_125 import isPalindrome


class TestPalindrome(unittest.TestCase):

    def setUp(self):
        self.solution = self

    def test_palindrome_with_punctuation(self):
        self.assertTrue(isPalindrome("A man, a plan, a canal: Panama"))
        self.assertTrue(isPalindrome("Engage le jeu que je le gagne......."))

    def test_palindrome_with_mixed_case(self):
        self.assertTrue(isPalindrome("MadamInEdenImAdam"))
        self.assertTrue(isPalindrome("A Man, A Plan, A Canal-Panama!"))

    def test_non_palindrome(self):
        self.assertFalse(isPalindrome("Hello, world!"))
        self.assertFalse(isPalindrome("This is def not a palindrome"))
        self.assertFalse(isPalindrome("onomatopoeia"))

    def test_palindrome_with_empty_string(self):
        self.assertTrue(isPalindrome(""))
        self.assertTrue(isPalindrome("   "))

    def test_single_character(self):
        self.assertTrue(isPalindrome("a"))
        self.assertTrue(isPalindrome("Z"))

    def test_palindrome_with_numbers_and_symbols(self):
        self.assertFalse(isPalindrome("Able, was I ere I saw Elba! 12321"))
        self.assertTrue(isPalindrome("AzbC && cbza::::"))

    def test_non_palindrome_with_alphanumeric_characters(self):
        self.assertFalse(isPalindrome("abc123"))
        self.assertFalse(isPalindrome("9630is"))


if __name__ == '__main__':
    unittest.main()
