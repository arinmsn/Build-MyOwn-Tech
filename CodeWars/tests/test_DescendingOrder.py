import unittest

class TestDescendingOrder(unittest.TestCase):

    def basic_test_cases(self):
            self.assertEqual(descending_order(0), 0)
            self.assertEqual(descending_order(15), 51)
            self.assertEqual(descending_order(123456789), 987654321)

if __name__ == '__main__':
    unittest.main()