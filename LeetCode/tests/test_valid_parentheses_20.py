import pytest

from LeetCode.valid_parentheses_20 import isValid


def test_for_invalid_characters():
    assert isValid("(") == False
    assert isValid("(]") == False
    assert isValid("$$") == False
    assert isValid("{[^]}") == False


def test_for_valid_parentheses():
    assert isValid("[]") == True
    assert isValid("()[]{}") == True
    assert isValid("{[]}") == True
    assert isValid("([])") == True
