// const letters = new Set(["a","b","c","d","e"]);
// console.log("sebelum =", letters);
// letters.add("a"); // gk nambah, karena set gk bisa duplicate
// console.log("sesudah =", letters);

// const letters = new Set(["a","b","c","d","e"]);
// // List all elements
// let text = "";
// letters.forEach(function(value) {
//     text += value + " - ";
// });
// console.log(letters);

// const letters = new Set(["a","b","c","d","e"]);
// console.log(letters.has(1));

const set1 = new Set();
set1.add({x: 10, y:20}).add({ x:20, y: 30});
console.log(set1.size); // expected output: 2
// delete any point with `x > 10`.
set1.forEach((point) => {
    if (point.x > 10){
        set1.delete(point);
    }
});
console.log(set1.size); // expected output: 1
