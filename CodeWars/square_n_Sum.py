# Complete the square sum function so that it squares each number passed into it 
# and then sums the results together.

# For example, for [1, 2, 2] 
# it should return 9 because 1^2 + 2^2 + 2^2 = 9.

def square_sum(numbers):
    sum_of_digits = 0
    for digit in numbers:
        sum_of_digits += int(digit)**2
    print(sum_of_digits)
    
    int_digit = int(digit)
    sum_builtin_func = sum(int_digit**2) for digit in str(numbers)
    print('Built-in sum: ' + sum_builtin_func)

square_sum([1,2,2])
