// normal
var array = ["Anggur", "Belimbing", "Ceri", "Durian", "Erbis"];
console.log(array);

// push 
var array1 = ["Anggur", "Belimbing", "Ceri", "Durian", "Erbis"];
array1.push("Frambos");
console.log(array1);

// splice 
var array2 = ["Anggur", "Belimbing", "Ceri", "Durian", "Erbis"];
array2.splice(2, 0, "Frambos"); // menambah value di index ke-2, menghapus 0 value setelah index ke-2
console.log(array2);

// splice 
var array3 = ["Anggur", "Belimbing", "Ceri", "Durian", "Erbis"];
array3.splice(2, 1, "Frambos"); // // menambah value di index ke-2, menghapus 1 value setelah index ke-2
console.log(array3);