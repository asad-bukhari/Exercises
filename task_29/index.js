// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Create an array of favorite fruits
var favorite_fruits = ['banana', 'mango', 'watermelon'];
// Write if statements to check if certain fruits are in the array
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favorite_fruits.includes('mango')) {
    console.log('You really like mangoes!');
}
if (favorite_fruits.includes('watermelon')) {
    console.log('You really like watermelons!');
}
if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}
else {
    console.log('Apples are not in your list of favorite fruits.');
}
if (favorite_fruits.includes('strawberry')) {
    console.log('You really like strawberries!');
}
else {
    console.log('Strawberries are not in your list of favorite fruits.');
}
