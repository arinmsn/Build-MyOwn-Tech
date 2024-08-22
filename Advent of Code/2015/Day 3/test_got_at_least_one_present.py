from got_at_least_one_present import count_houses_with_presents
from got_at_least_one_present_part2 import count_houses_with_presents_part2


def test_count_houses_with_presents():
    assert count_houses_with_presents(">") == 2
    assert count_houses_with_presents("^>v<") == 4
    assert count_houses_with_presents("^v^v^v^v^v") == 2
    assert count_houses_with_presents(">>>>>") == 6
    assert count_houses_with_presents("^^vv") == 3
    assert count_houses_with_presents("") == 1


# Robo-Santa helps Santa deliver the presents
def test_count_houses_with_presents_part2():
    assert count_houses_with_presents_part2("^v") == 3
    assert count_houses_with_presents_part2("^>v<") == 3
    assert count_houses_with_presents_part2("^v^v^v^v^v") == 11
