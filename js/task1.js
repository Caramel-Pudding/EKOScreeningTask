const data = {
  users: [
    {
      id: 0,
      name: "Alice"
    },
    {
      id: 1,
      name: "Bob"
    }
  ],
  messages: [
    {
      id: 0,
      text: "Hello, Bob!",
      userId: 0,
      receiverId: 1
    },
    {
      id: 1,
      text: "Hello, Alice!",
      userId: 1,
      receiverId: 0
    }
  ]
};

function normalizeReceivedData(receivedData) {
    // Composing map-like object and then taking elements by id has a lesser complexity
    // compared to findUserById method listed below
  const usersMap = {};
  receivedData.users.forEach(user => (usersMap[user.id] = { id: user.id, name: user.name }));

  return receivedData.messages.map(message => ({
    messageText: message.text,
    userFromName: usersMap[message.userId].name,
    usetToName: usersMap[message.receiverId].name
  }));
}

// function findUserById(id, users) {
//   return users.find(user => user.id === id);
// }

console.log(normalizeReceivedData(data));
