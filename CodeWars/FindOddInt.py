# Given an array of integers, find the one that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.
from collections import Counter

def find_it(seq):
    odd_nums = []
    seq_dictionary = (Counter(seq))
    for i in seq_dictionary.values():
        if i % 2 == 0:
            continue
        else:
            i.append(odd_nums)
    print(odd_nums)
   


find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) # Answer: 5