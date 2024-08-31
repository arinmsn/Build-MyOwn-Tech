"""
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
"""


def isPalindrome(s: str) -> bool:
    result = ""
    for char in s:
        if char.isalnum():
            result += char.lower()

    reversed_str = result[::-1]
    return result == reversed_str


"""
Time complexity: O(n) 
Space complexity: O(n)
"""
