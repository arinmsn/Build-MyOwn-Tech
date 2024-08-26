import unittest

from LeetCode.min_stack_155 import MinStack


class TestMinStack(unittest.TestCase):

    def test_operations(self):
        min_stack = MinStack()

        # Test the initial state of the stack
        min_stack.push(-2)
        min_stack.push(0)
        min_stack.push(-3)

        # Testing getMin
        self.assertEqual(min_stack.getMin(), -3)

        # Test pop and then getMin
        min_stack.pop()
        self.assertEqual(min_stack.getMin(), -2)

        # Test top
        self.assertEqual(min_stack.top(), 0)

        # Test pop and getMin again
        min_stack.pop()
        self.assertEqual(min_stack.getMin(), -2)

        # All elements should be popped, we test push and check again
        min_stack.pop()
        min_stack.push(7)
        self.assertEqual(min_stack.top(), 7)
        self.assertEqual(min_stack.getMin(), 7)

        min_stack.push(-7)
        self.assertEqual(min_stack.top(), -7)
        self.assertEqual(min_stack.getMin(), -7)

    """ 
    def test_empty_stack(self):
        min_stack = MinStack()

        # Test pop and top on an empty stack
        with self.assertRaises(IndexError):
            min_stack.pop()

        with self.assertRaises(IndexError):
            min_stack.top()

        # Test getMin on an empty stack
        with self.assertRaises(IndexError):
            min_stack.getMin()
        """


if __name__ == '__main__':
    unittest.main()
