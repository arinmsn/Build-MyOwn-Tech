import pytest

from gift_wrapping_paper import find_smallest_two_numbers, calculate_gift_wrapping_paper
from gift_wrapping_paper import calculate_ribbon_length_to_order


def test_find_smallest_two_numbers():
    assert find_smallest_two_numbers(1, 2, 3) == (1, 2)
    assert find_smallest_two_numbers(1, 3, 2) == (1, 2)
    assert find_smallest_two_numbers(3, 2, 1) == (1, 2)


def test_gift_wrapping_paper():
    assert calculate_gift_wrapping_paper(2, 3, 4) == 58
    assert calculate_gift_wrapping_paper(1, 1, 10 == 43)


def test_calculate_ribbon_length_to_order():
    assert calculate_ribbon_length_to_order(2, 3, 4) == 34
    assert calculate_ribbon_length_to_order(1, 1, 10) == 14
    assert calculate_ribbon_length_to_order(2, 5, 8) == 94
