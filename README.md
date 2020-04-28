# EKOScreeningTask
Eko Screening Task
Task 1
Consider the example below
You have an object of 2 arrays coming from the server. An array of all users, and an array of all messages.

const data = {
  users: [
    {
      id: Int,
      name: String,
    },
    ...
  ],
  messages: [
    {
      id: Int,
      text: String,
      userId: Int,
      receiverId: Int,
    },
    ...
  ],
};

Write a function which iterates through received data and returns a single array with data in the format: [{ messageText, userFromName, userToName }]

function normalizeReceivedData(receivedData) {
  // Write your code here
}

Bonus
Consider that there could be millions of messages and thousands of users. How could you improve the solution in order to optimize for performance?
Task 2
Consider examples below
Example 1:
Input: "ekoapp"
Shift steps:
  “pekoap” - shift number one
  “ppekoa” - shift number two
  “appeko” - shift number three
  “oappek” - shift number four
  “koappe” - shift number five
  “ekoapp” - shift number six, final
Output: 1 // Number of times shifted string is equal to original string

Example 2:
Input: "ekoeko"
Output: 2
Write a function
Write a function equalShiftsAmount that:
Takes a string as an argument,
Shifts the string by 1 letter on each loop
Returns the amount of times the shifted string is equal to the original string.

function equalShiftsAmount(input) {
  // Write your code here
}



Task 3
Consider examples below.
Example 1:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807

Example 2:
Input: (8 -> 3) + (1 -> 9 -> 2)
Output: 9 -> 2 -> 3
Explanation: 38 + 291 = 329

Continue the code below

// Data structure definition
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function sumLinkedList(l1, l2) {
  // Write code here
};


NOTE:
- Input will always two non-empty linked lists representing two non-negative integers.
- The digits are stored in reverse order and each of their nodes contain a single digit.
- Return it as a linked list.


