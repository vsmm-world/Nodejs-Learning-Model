// Dedicated for Loops in Node js


// Creating a sample array
let myArray = [1, 2, 3, 4, 5];

// Finding the length of the array
const length = myArray.length;
console.log('Length:', length);

// Accessing elements in the array by index
const elementAtIndex2 = myArray[2];
console.log('Element at index 2:', elementAtIndex2);

// Adding elements to the end of the array
myArray.push(6, 7);
console.log('Array after push:', myArray);

// Removing the last element from the array
const poppedElement = myArray.pop();
console.log('Popped element:', poppedElement);
console.log('Array after pop:', myArray);

// Reversing the order of elements in the array
const reversedArray = myArray.reverse();
console.log('Reversed array:', reversedArray);

// Checking if an element exists in the array
const includesElement = myArray.includes(3);
console.log('Includes 3:', includesElement);

// Joining elements of the array into a string
const joinedArray = myArray.join('-');
console.log('Joined array:', joinedArray);

// Removing elements from an index
const removedElements = myArray.splice(1, 2);
console.log('Removed elements:', removedElements);
console.log('Array after splice:', myArray);

// Adding elements at a specific index
myArray.splice(1, 0, 'a', 'b');
console.log('Array after adding elements:', myArray);

// Finding the index of a specific element
const indexOfElement = myArray.indexOf('a');
console.log('Index of "a":', indexOfElement);

// Sorting the array
const sortedArray = myArray.sort();
console.log('Sorted array:', sortedArray);

// Mapping over the array
const mappedArray = myArray.map((item) => item * 2);
console.log('Mapped array:', mappedArray);

// Filtering elements in the array
const filteredArray = myArray.filter((item) => typeof item === 'number');
console.log('Filtered array:', filteredArray);

// Reducing the array to a single value
const reducedValue = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Reduced value:', reducedValue);

// Concatenating arrays
const anotherArray = [8, 9, 10];
const concatenatedArray = myArray.concat(anotherArray);
console.log('Concatenated array:', concatenatedArray);

// Slicing a portion of the array
const slicedArray = concatenatedArray.slice(2, 6);
console.log('Sliced array:', slicedArray);

// Filling elements in the array
const filledArray = new Array(5).fill(0);
console.log('Filled array:', filledArray);
