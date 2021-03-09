import unittest

def likes(names):
    return 

    # test.assert_equals(likes(['Peter']), 'Peter likes this')
    # test.assert_equals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
    # test.assert_equals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
    # test.assert_equals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')

class MyTest(unittest.TestCase):
    def test(self):
        self.assertEqual(list([]), 'no one likes this')

if __name__ == "__main__":
    unittest.main()