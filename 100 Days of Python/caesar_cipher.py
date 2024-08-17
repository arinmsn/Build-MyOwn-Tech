import caesar_cipher_logo

print(caesar_cipher_logo.logo)

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
            'v', 'w', 'x', 'y', 'z']


def caesar(original_text, shift_amount, encode_or_decode):
    output_text = ""

    if encode_or_decode == "decode":
        shift_amount *= -1

    for letter in original_text:
        # in case user types a symbol
        if letter not in alphabet:
            output_text += letter
        else:
            shifted_pos = alphabet.index(letter) + shift_amount
            shifted_pos %= len(alphabet)
            output_text += alphabet[shifted_pos]
    print(f"Here is {encode_or_decode}d text: {output_text}")


should_continue = True

while should_continue:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt: ").lower()
    text = input("Type your message: ").lower()
    shift = int(input("Type the shift number: "))

    caesar(original_text=text, shift_amount=shift, encode_or_decode=direction)

    restart = input("Type 'Yes' if you want to do it again or 'No' to quit: ").lower()
    if restart == "no":
        should_continue = False
        print("See ya!")
