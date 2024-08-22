from got_at_least_one_present import count_houses_with_presents


def test_count_houses_with_presents():
    assert count_houses_with_presents(">") == 2
    assert count_houses_with_presents("^>v<") == 4
    assert count_houses_with_presents("^v^v^v^v^v") == 2
    assert count_houses_with_presents(">>>>>") == 6
    assert count_houses_with_presents("^^vv") == 3
