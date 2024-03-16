// menghapus element dalam sebuah array
var ar = [1,2,3,4,5,6];
ar.length = 4; // set length to remove elements
console.log(ar); // [1, 2, 3, 4]

// menghapus index terakhir pada array
var ar = [1, 2, 3, 4, 5, 6];
ar.pop(); // returns 6
console.log(ar); // [1, 2, 3, 4, 5]

// menghapus array pertama dalam sebuah array
var ar = ["zero", "one", "two", "three"];
ar.shift(); // returns "zero"
console.log(ar); // ["one", "two", "three"]

// menghapus data menggunakan splice
var list = ["bar", "baz", "foo", "qux"];
list.splice(0, 2);
console.log(list); // [ 'foo', 'qux' ]
// starting at index position 0, remove two elements ["bar", "baz"]