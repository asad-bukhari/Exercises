// More Conditional Tests: You don’t have to limit the 
// number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least 
// one True and one False result for each of the following:


// • Tests for equality and inequality with strings

let note_book= "High_price";
console.log(note_book==="High_price");
console.log(note_book==="Low_price");

// • Tests using the lower case function

console.log(note_book==="high_price");



// • Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, 
// and less than or equal to


// Equality Test

let a = 5;
let b = 10;

if (a===5){
    console.log("a is equal to 5")
}

// inequality test

if (b!==5){
    console.log("b is not equal to 5");

}

// Greater than test

if(b>a){
    console.log('b is grater than a');
}


// less than test

if (a<b){
    console.log('a is less than b');
}

//  Great than or equal to test

if (b>=10){
    console.log('b is greater than or equal to 10');

}


// less than or qual to test


if (a<=b){
    console.log('a is less than or equal to b');


}


// • Tests using "and" and "or" operators


// "ANd" operators
if (a==5 && b===10){
    console.log('a is equal to 5 and b is  equal to 10');

}

/// "Or"  operator test


if (a==5 || b===5){
    console.log("a is equal to 5 or b is equal to 5 ");
}


// • Test whether an item is in a array
 
let fruits = ['apple','banana', 'mango'];

if(fruits.includes('apple')){
    console.log('apple majoood hai');
}


// • Test whether an item is not in a array


if(!fruits.includes('cherry')){
    console.log('cherry is not in the array');
}








