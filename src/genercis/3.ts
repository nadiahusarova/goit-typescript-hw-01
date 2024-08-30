function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  const objectA = { name: 'Alice', age: 25 };
  const objectB = { email: 'alice@example.com', isAdmin: true };
  
  const mergedObject = merge(objectA, objectB);
  console.log(mergedObject);
  