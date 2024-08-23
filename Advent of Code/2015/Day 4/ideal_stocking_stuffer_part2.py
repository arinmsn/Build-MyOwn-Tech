import hashlib


def advent_coin_miner(secret_key):
    number = 1
    while True:
        complete_str = secret_key + str(number)

        # Generate the MD5 hash
        hash_object = hashlib.md5(complete_str.encode())
        hash_hex = hash_object.hexdigest()

        if hash_hex.startswith("000000"):
            return number

        number += 1

print(advent_coin_miner("yzbqklnj")) # Part II: 9962624