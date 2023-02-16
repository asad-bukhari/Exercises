// Q-18 Seeing the World: Think of at least five places in 
//the world you’d like to visit.


// • Store the locations in a array.
// Make sure the array is not in alphabetical order.

const favorit_places = ["Saudi Arabia", "Sham", "Usa", "Germany", "Amerca"];

// • Print your array in its original order.

console.log(favorit_places);


// • Print your array in alphabetical order without modifying the actual list.

const Sorted_places = favorit_places.slice().sort();
console.log(Sorted_places);

// • Show that your array is still in its original order 
//by printing it.

console.log(favorit_places);

// • Reverse the order of your list.
// Print the array to show that its order has changed.

const reverse_array = favorit_places.slice().reverse();
console.log(reverse_array);


// Reverse the order of your list again.
// Print the list to show it’s back to its original order.

const reverse_array_again = reverse_array.slice().reverse();
console.log(reverse_array_again);
console.log(reverse_array);


// • Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed

const sort_reverse_array = reverse_array.slice().sort();
console.log(sort_reverse_array);


// • Sort to change your array so it’s stored in reverse 
//alphabetical order. Print the list to show that
// its order has changed.

const reverse_alpa_order = sort_reverse_array.slice().reverse();
console.log(reverse_alpa_order);
