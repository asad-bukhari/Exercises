

//Q-17   Shrinking Guest List: You just found out that your
// new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.


const  frineds_list= ['Saqib', 'Shaizaib', 'Irfan', 'Aqib', 'Falk', 'Saad'];


// Start with your program from Exercise 16.
// Add a new line that prints a message saying that 
//you can invite only two people for dinner.


console.log(`Dear ${frineds_list[0]}, sorry i have only two seats for dinner`);
console.log(`Dear ${frineds_list[1]}, sorry i have only two seats for dinner`);
console.log(`Dear ${frineds_list[2]}, sorry i have only two seats for dinner`);
console.log(`Dear ${frineds_list[3]}, sorry i have only two seats for dinner`);
console.log(`Dear ${frineds_list[4]}, sorry i have only two seats for dinner`);
console.log(`Dear ${frineds_list[5]}, sorry i have only two seats for dinner`);


// • Remove guests from your list one at a time until 
//only two names remain in your list. 
//Each time you pop a name from your list, 
//print a message to that person letting them know
// you’re sorry you can’t invite them to dinner.

const remove_falk = frineds_list.pop();
console.log(`sorry ${remove_falk}, i can't invite you to dinner.`);


const remove_saad = frineds_list.pop();
console.log(`sorry ${remove_saad}, i can't invite you to dinner.`);

const remove_aqib = frineds_list.pop();
console.log(`sorry ${remove_aqib}, i can't invite you to dinner.`);


const remove_irfan = frineds_list.pop();
console.log(`sorry ${remove_irfan}, i can't invite you to dinner.`);


// • Print a message to each of the two people still on 
//your list, letting them know they’re still invited.

console.log(`${frineds_list[0]}, you are still inviting for dinner.`)
console.log(`${frineds_list[1]}, you are still inviting for dinner.`)


// • Remove the last two names from your list,
// so you have an empty list. Print your list to
// make sure you actually have an empty list at the
// end of your program.



frineds_list.pop();
frineds_list.pop();

console.log(frineds_list);
