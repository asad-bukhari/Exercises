// Q-16  More Guests: You just found a bigger dinner table,
// so now more space is available. Think of three more
// guests to invite to dinner.


const inviting_friends = ["Shaizaib", "Aqib", "Falk"];

// • Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log(`Dear ${inviting_friends[0]}, I found a Bigger Table therefore i want to inviting more frinds.`)
console.log(`Dear ${inviting_friends[1]}, I found a Bigger Table therefore i want to inviting more frinds.`)
console.log(`Dear ${inviting_friends[2]}, I found a Bigger Table therefore i want to inviting more frinds.`)

// • Add one new guest to the beginning of your array.

inviting_friends.unshift("Saqib");
console.log(inviting_friends);


// • Add one new guest to the middle of your array.

inviting_friends.splice(2,0,"Irfan");
console.log(inviting_friends);

// Use append() to add one new guest to the end 
//of your list. 

inviting_friends.push("Saad");
console.log(inviting_friends);

// Print a new set of invitation messages, 
//one for each person in your list.



console.log(`Dear ${inviting_friends[0]}, I am inviting you for diner`);
console.log(`Dear ${inviting_friends[1]}, I am inviting you for diner`);
console.log(`Dear ${inviting_friends[2]}, I am inviting you for diner`);
console.log(`Dear ${inviting_friends[3]}, I am inviting you for diner`);
console.log(`Dear ${inviting_friends[4]}, I am inviting you for diner`);
console.log(`Dear ${inviting_friends[5]}, I am inviting you for diner`);