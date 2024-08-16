"""
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.


Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
"""


class ListNode(object):
    def __init__(self, val=0, next=None):
        self.next = None
        self.val = val
        self.next = next


def mergeTwoLists(self, list1, list2):
    """
    :type list1: Optional[ListNode]
    :type list2: Optional[ListNode]
    :rtype: Optional[ListNode]
    """
    dummy = ListNode()
    tail = dummy

    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next

    # If one of the lists is still empty, then attach the remainder
    if list1:
        tail.next = list1
    else:
        tail.next = list2

    # The merged list starts after the dummy node
    return dummy.next


def mergeTwoListsRecursive(list1: ListNode, list2: ListNode) -> ListNode:
    if not list1:
        return list2
    if not list2:
        return list1

    if list1.val < list2.val:
        list1.next = mergeTwoListsRecursive(list1.next, list2)
        return list1
    else:
        list2.next = mergeTwoListsRecursive(list1, list2.next)
        return list2


"""
For mergeTwoListsIterative():
---
The time complexity of this function is O(n + m) where n and m are the lengths of list1 and list2 respectively.
This is because we iterate through both lists once to merge them together.

The space complexity is O(1) because we are not using any extra space

For mergeTwoListsRecursive():
---
The time complexity of this recursive solution is O(n + m), where n and m are the lengths of the two input lists.
This is because in the worst case scenario, the function will need to iterate through all elements of both lists to merge them.

The space complexity is also O(n + m) due to the recursive calls. 

"""
