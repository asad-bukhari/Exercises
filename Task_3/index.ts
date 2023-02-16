
// Q-3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase 
var person_name = "asad";
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
