// Q-1   Install Node.js, TypeScript and VS Code on your computer.


// Q- 2 Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

const  person_name= "Asad";
console.log(`hello ${person_name} Whould you like to learn with PIAIC?`);


// Q-3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase 

// Lowercase

const convert_lowercase = person_name.toLowerCase();
console.log(convert_lowercase);

//upercase
const convert_upercase= person_name.toUpperCase(); 
console.log(convert_upercase);

// Title Case

const First_letter = person_name[0].toUpperCase();

const other_letter = person_name.slice(1);
 
const convet_titlecase = First_letter+other_letter;
console.log(convet_titlecase);

//Q-4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

const quate= "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
console.log(quate);

// Q-5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

const famous_person =" Albert Einstein";
const famous_person_said = "“A person who never made a mistake never tried anything new.”" 
console.log(`${famous_person} once said, ${famous_person_said}`);

//Q-6  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
//and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const name_with_space = "\t\n Asad \t\n";
console.log(name_with_space);
const name_with_strip = name_with_space.trim();
console.log(name_with_strip);


// Q-7-8 Number Eight: Write addition, subtraction, multiplication, and division operations 
//that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

// Addition
console.log(4 + 4); // Output: 8

// Subtraction
console.log(16 - 8); // Output: 8

// Multiplication
console.log(2 * 4); // Output: 8

// Division
console.log(64 / 8); // Output: 8


//Q- 9  Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.

const favorit_number = 6;
const favorit_number_message = "My Number is " + favorit_number + ".";
console.log(favorit_number_message);


// Q- 10   Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.



// Q- 11  Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

const My_friens_name = ["Shazaib", "Aqib", "Falk"];

console.log(My_friens_name[0]);
console.log(My_friens_name[1]);
console.log(My_friens_name[2]);

//Q-12  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized
//with the person’s name.

const greetings  = "Good Morning ! Have a Good day";
console.log(My_friens_name[0]+" "+greetings);
console.log(My_friens_name[1]+" "+greetings);
console.log(My_friens_name[2]+" "+greetings);



// Q-13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”

const Favorit_sawari = ["Honda 1 to 5", "Car", "Jeep"];

console.log("I used "+Favorit_sawari[0]+ " For incity Trevel");
console.log("I used "+Favorit_sawari[1]+ " For out city Trevel");
console.log("I used "+Favorit_sawari[2]+ " For Shikar");


