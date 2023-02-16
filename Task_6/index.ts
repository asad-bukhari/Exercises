//Q-6  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
//and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const name_with_space = "\t\n Asad \t\n";
console.log(name_with_space);
const name_with_strip = name_with_space.trim();
console.log(name_with_strip);
