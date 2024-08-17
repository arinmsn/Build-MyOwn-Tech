alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z']


# direction = input("Type 'encode' to encrypt, type 'decode' to decrypt: ").lower()
# text = input("Type your message: ").lower()
# shift = int(input("Type the shift number: "))


def encrypt(original_text, shift_amount):
    cipher_text = ""

    for letter in original_text:
        shifted_pos = original_text.index(letter) + shift_amount
        # Addresses issue of shifting letters correctly
        # (e.g. z shifted 9 -> pos of z is 25 in the list + 9 = 34
        # Accessing 34 in the list will throw an error
        shifted_pos %= len(alphabet)
        cipher_text += alphabet[shifted_pos]

    print(f"Here is hte encoded text: {cipher_text}")


encrypt("z", 9)
