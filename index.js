// Code your solutions in this file
function writeCards(names, eventName) {
    // Step 1: Create a new empty array to hold the messages
    let messages = [];

    // Step 2: Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Step 3: Build the custom thank you message
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

        // Step 4: Add the message to the messages array
        messages.push(message);
    }

    // Step 5: Return the array of messages
    return messages;
}

// Example usage:
const namesArray = ["Ann", "Dianah", "Mary"];
const event = "birthday";
console.log(writeCards(namesArray, event));
// Output:
// [
//   'Thank you, Ann, for the wonderful birthday gift!',
//   'Thank you, Dianah, for the wonderful birthday gift!',
//   'Thank you, Mary, for the wonderful birthday gift!'
// ]
function countDown(number) {
    // Keep counting down as long as the number is >= 0
    while (number >= 0) {
        console.log(number);
        number--; // Decrease the number by 1 each time
    }
}

// Example usage:
countDown(10);
// This will log: 10, 9, 8, ..., 1, 0


