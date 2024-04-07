// Dedicated for Loops in Node.js

// do-while loop
do {
    // code to be executed
    // execute at least once
} while (condition);

// while loop
while (condition) {
    // code to be executed
}

// for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // code to be executed
}

// forEach loop
array.forEach(element => {
    // code to be executed
});

// for-in loop
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        // code to be executed
    }
}

// for-of loop
for (const iterator of object) {
    // code to be executed
}

// nested loops
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        // code to be executed
    }
}

// break statement
for (let i = 0; i < array.length; i++) {
    if (condition) {
        break; // exit the loop
    }
    // code to be executed
}

// continue statement
for (let i = 0; i < array.length; i++) {
    if (condition) {
        continue; // skip to the next iteration
    }
    // code to be executed
}

// labeled statement
outerLoop: for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        if (condition) {
            break outerLoop; // exit both loops
        }
        // code to be executed
    }
}

// infinite loop
while (true) {
    // code to be executed indefinitely
}