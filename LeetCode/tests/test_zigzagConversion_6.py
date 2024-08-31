import pytest

from LeetCode.zigzagConversion_6 import convert


def test_converstion_of_string():
    assert convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR"
    assert convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI"
    assert convert("A", 1) == "A"
