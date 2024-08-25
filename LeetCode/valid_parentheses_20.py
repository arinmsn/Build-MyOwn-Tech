"""
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([])"

Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
"""


def isValid(s):
    brackets_map = {')': '(', '}': '{', ']': '['}
    stack = []

    for char in s:
        if char in brackets_map:
            # Pop the top element from the stack if it's not empty,
            # otherwise, use a dummy value of '#'
            top_element = stack.pop() if stack else '#'

            # Check if the popped element matches the corresponding opening bracket
            if brackets_map[char] != top_element:
                return False
        else:
            # We have an opening bracket, so let's push it on the stack
            stack.append(char)

    return not stack
