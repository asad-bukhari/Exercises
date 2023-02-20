// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// Create an array of usernames
var usernames = ['admin', 'Eric', 'Jessica', 'John', 'Michael'];
// Check if the array is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the array and print a greeting for each user
    for (var i = 0; i < usernames.length; i++) {
        // Check if the current user is the admin
        if (usernames[i] === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
