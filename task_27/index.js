// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
var alien_color = "yellow";
if (alien_color === "yellow") {
    console.log("player earned 10 points .");
}
// • If the alien is red, print a message that the player earned 15 points.
var alien_color = "red";
if (alien_color === "red") {
    console.log("player earned 15 points .");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color === "green") {
    console.log("You Earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("You Earned 10 points");
}
else if (alien_color === "red") {
    console.log("You Earned 15 points");
}
else {
    console.log('nothing');
}
