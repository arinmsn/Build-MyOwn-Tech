import unittest

from LeetCode.is_subsequence_392 import is_subsequence


class TestisSubsequence(unittest.TestCase):

    def test_empty_s(self):
        self.assertTrue(is_subsequence(self, "", "ahbgdcx"))

    def test_s_equals_t(self):
        self.assertTrue(is_subsequence(self, "abc", "abc"))

    def test_s_longer_than_t(self):
        self.assertFalse(is_subsequence(self, "abcdef", "abc"))

    def test_s_single_character(self):
        self.assertTrue(is_subsequence(self, "a", "ahbgdc"))

    def test_non_matching_characters(self):
        self.assertFalse(is_subsequence(self, "abc", "defg"))
        self.assertFalse(is_subsequence(self, "axc", "ahbgdc"))

    def test_out_of_order(self):
        self.assertFalse(is_subsequence(self, "abc", "acb"))

    def test_repeated_characters(self):
        self.assertTrue(is_subsequence(self, "aaa", "aaaaaa"))

    def test_subsequence_at_end(self):
        self.assertTrue(is_subsequence(self, "gdc", "ahbgdc"))

    def test_isSubsequence_in_beg_middle_end(self):
        self.assertTrue(is_subsequence(self, "abc", "ahbgdc"))
        self.assertTrue(is_subsequence(self, "xyz", "xandyorz"))


if __name__ == "__main__":
    unittest.main()
