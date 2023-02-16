
//Q-15 Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


// • Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating 
//the name of the guest who can’t make it.
const inviting_friends = ["Shaizaib", "Aqib", "Falk"];


console.log(`Dear ${inviting_friends[2]}, you can't Join us, therefore I inviting Danish`);
 
// • Modify your list, replacing the name of the guest
// who can’t make it with the name of the new person 
//you are inviting.

// changining Guest list, "Falk" Replace with "Danish"
 
 inviting_friends[2]="Danish";
console.log(inviting_friends);


// • Print a second set of invitation messages,
// one for each person who is still in your list.


 // Inviting Shaizaib to dinner

console.log(`Dear ${inviting_friends[0]}, I would be honored to have you join me for dinner.`);

// Inviting Aqib to dinner

console.log(`Dear ${inviting_friends[1]}, I would be delighted if you would join me for dinner.`);

// Inviting Danish to dinner

console.log(`Dear ${inviting_friends[2]}, I would be thrilled if you could join me for dinner. `);