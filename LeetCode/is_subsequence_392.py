"""
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the
original string by deleting some (can be none) of the characters without disturbing the relative
positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false


Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.


Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109,
and you want to check one by one to see if t has its subsequence.

In this scenario, how would you change your code?
"""


def is_subsequence(self, s: str, t: str) -> bool:
    """
    pointer_s = 0
    pointer_t = 0

    # Loop until we either finish with `t` or match all of `s` string
    while pointer_s < len(s) and pointer_t < len(t):
        if s[pointer_s] == t[pointer_t]:
            # Move the pointer in `s` string only if there is a match
            pointer_s += 1
        # We always want to move pointer for `t` forward
        pointer_t += 1

    # True only if pointer_s has moved through all of `s`
    # `s` is a subsequence of `t`
    return pointer_s == len(s)
    """
    t_iter = iter(t)
    return all(char in t_iter for char in s)


"""
For longer approach:
Time complexity: At most, O(m + n), where m is the length of string `s` and n is the length of string `t`
Space complexity: O(1)

For the concise version:
Time complexity: O(n) - 
Space complexity: The space complexity is also O(n), as the function creates an iterator for string t,
which requires additional space proportional to the length of t.
"""
