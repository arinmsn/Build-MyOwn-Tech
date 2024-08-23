from ideal_stocking_stuffer_part1 import advent_coin_miner


def test_advent_coin_miner():
    assert advent_coin_miner("abcdef") == 609043
    assert advent_coin_miner("pqrstuv") == 1048970
    assert advent_coin_miner("python3") == 53600
    assert advent_coin_miner("Pneumonoultramicroscopicsilicovolcanoconiosis") == 83273
    assert advent_coin_miner("Supercalifragilisticexpialidocious") == 301550
    assert advent_coin_miner("SpongeBob") == 1715986
