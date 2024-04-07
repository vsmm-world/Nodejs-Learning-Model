// Creating a sample string
const myString = 'Hello, this is a sample string!';

// Finding the length of the string
const length = myString.length;
console.log('Length:', length);

// Converting the string to uppercase
const upperCaseString = myString.toUpperCase();
console.log('Uppercase:', upperCaseString);

// Finding the index of a specific character
const indexOfChar = myString.indexOf('s');
console.log('Index of "s":', indexOfChar);

// Extracting a portion of the string
const substring = myString.substring(7, 15);
console.log('Substring:', substring);

// Splitting the string into an array based on a delimiter
const splitString = myString.split(' ');
console.log('Split string:', splitString);

// Checking if the string includes a specific substring
const includesSubstr = myString.includes('sample');
console.log('Includes "sample":', includesSubstr);

// Replacing part of the string with another substring
const replacedString = myString.replace('Hello', 'Hi');
console.log('Replaced string:', replacedString);

// Checking if the string starts with a specific substring
const startsWithSubstr = myString.startsWith('Hello');
console.log('Starts with "Hello":', startsWithSubstr);

// Checking if the string ends with a specific substring
const endsWithSubstr = myString.endsWith('string!');
console.log('Ends with "string!":', endsWithSubstr);

// Repeating the string a certain number of times
const repeatedString = myString.repeat(3);
console.log('Repeated string:', repeatedString);

// Removing leading and trailing whitespace from the string
const trimmedString = myString.trim();
console.log('Trimmed string:', trimmedString);

// Checking if the string is empty
const isEmptyString = myString.length === 0;
console.log('Is empty string:', isEmptyString);
