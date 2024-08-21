import pytest

from gift_wrapping_paper import calculate_gift_wrapping_paper


def test_gift_wrapping_paper():
    assert calculate_gift_wrapping_paper(2, 3, 4) == 58
    assert calculate_gift_wrapping_paper(1,1,10 == 43)
