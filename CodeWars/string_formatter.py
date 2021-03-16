# Given: an array containing hashes of names

# Return: a string formatted as a list of names separated by commas except for
# the last two names, which should be separated by an ampersand.

# Example:

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# # returns 'Bart & Lisa'

# namelist([ {'name': 'Bart'} ])
# # returns 'Bart'

# namelist([])
# # returns ''

# formats = ['', '{}', '{} & {}']

# def nameList(names):
#     length = len(names)

#     if length > 2:
#         str_format = '{}, ' * (length - 2) + format[2]
#     else:
#         str_format = formats[length]

#     print(str_format.format(*names))

def namelist(names):
    str = ''
    if len(names) != 0:
        arr = []
        for i in range(0, len(names) - 1):
            arr.append(names[i]['name'])
        str = ', '.join(arr)
        str += ' & ' + names[-1]['name'] if str != '' else names[-1]['name']
    return str