import pytest

from LeetCode.baseball_game_682 import calPoints


def test_calpoints_to_calculate_sum_of_points():
    assert calPoints(["5", "2", "C", "D", "+"]) == 30
    assert calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]) == 27
    assert calPoints(["1", "C"]) == 0
