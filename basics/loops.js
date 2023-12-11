// Dedicated for Loops in Node js

do {
    //code to be executed
    //execute at least once
} while (condition);

while (condition) {
    //code to be executed
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //code to be executed
}

array.forEach(element => {
    //code to be executed
});

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        //code to be executed
     }
}

for (const iterator of object) {
    //code to be executed
}