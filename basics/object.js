// Creating a sample object
let myObject = {
    name: 'John',
    age: 30,
    city: 'New York',
  };
  
  // Accessing values by keys
  console.log('Name:', myObject.name);
  console.log('Age:', myObject['age']);
  
  // Adding a new key-value pair
  myObject.job = 'Engineer';
  console.log('Object after adding a property:', myObject);
  
  // Deleting a key-value pair
  delete myObject.city;
  console.log('Object after deleting a property:', myObject);
  
  // Checking if a key exists in the object
  const hasAge = myObject.hasOwnProperty('age');
  console.log('Has age property:', hasAge);
  
  // Getting all keys of the object
  const keys = Object.keys(myObject);
  console.log('Keys:', keys);
  
  // Getting all values of the object
  const values = Object.values(myObject);
  console.log('Values:', values);
  
  // Getting entries (key-value pairs) of the object as arrays
  const entries = Object.entries(myObject);
  console.log('Entries:', entries);
  
  // Checking the number of properties in the object
  const propertyCount = Object.keys(myObject).length;
  console.log('Number of properties:', propertyCount);
  
  // Cloning an object
  const clonedObject = { ...myObject };
  console.log('Cloned object:', clonedObject);
  
  // Merging objects
  const anotherObject = {
    country: 'USA',
    job: 'Developer',
  };
  
  const mergedObject = Object.assign({}, myObject, anotherObject);
  console.log('Merged object:', mergedObject);
  
  // Iterating through key-value pairs using for...in loop
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(`${key}: ${myObject[key]}`);
    }
  }
  