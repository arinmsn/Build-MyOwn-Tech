"""
Given the head of a singly linked list, reverse the list, and return the reversed list.


Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []


Constraints:

    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
"""


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverseListIterative(head: ListNode) -> ListNode:
    prev = None
    current = head
    while current is not None:
        # Store the next node
        next_node = current.next
        # Reverse the link
        current.next = prev
        # Move 'prev' to this node
        prev = current
        # Move to the next node
        current = next_node

    # 'prev' will be the new head of the reversed list
    return prev


def reverseListRecursive(head: ListNode) -> ListNode:
    # Base case - if head is empty or has reached the end of the list
    if head is None or head.next is None:
        return head

    # Reverse the rest of the list
    reverse_list_head = reverseListRecursive(head.next)

    # Put hte first element at the end
    head.next.next = head
    head.next = None

    return reverse_list_head

"""
The iterative approach is typically more space-efficient since it only uses a few extra variables,
while the recursive approach is more elegant but uses extra space on the call stack.

For iterative approach: 
---
The time complexity of this function is O(n) where n is the number of nodes in the linked list.
The function iterates through each node in the list once to reverse the links.

The space complexity is O(1) because the function only uses a constant amount of extra space regardless of the size of the input linked list.

For the recursive approach: 
---
The time complexity of this recursive function is still O(n), but the space complexity is also O(n) because the 
function uses recursive calls that add to the call stack, potentially up to the number of nodes in the list. 
The space required for the function's execution grows linearly with the size of the input list.
"""