import pytest

from not_quite_lisp import which_floor_to_go


def test_which_floor_to_go():
    assert which_floor_to_go("(())") == 0
    assert which_floor_to_go("()()") == 0
    assert which_floor_to_go("(((") == 3
    assert which_floor_to_go("(()(()(") == 3
    assert which_floor_to_go("))(((((") == 3
    assert which_floor_to_go("())") == -1 # first basement level
    assert which_floor_to_go("))(") == -1 # first basement level
    assert which_floor_to_go(")))") == -3
    assert which_floor_to_go(")())())") == -3