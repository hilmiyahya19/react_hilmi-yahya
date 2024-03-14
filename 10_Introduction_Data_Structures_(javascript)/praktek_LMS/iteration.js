// // contoh iterasi sebanyak 100 kali
// function printNumberVersionOne() {
//     let number = 2;
//     while(number <= 100){
//         // jika number adalah genap, maka akan ditampilkan pada console.
//         if(number % 2 == 0){
//             console.log(number);
//         }
//         number += 1;
//     }
// }
// printNumberVersionOne();

// contoh iterasi sebanyak 50 kali
function printNumberVersionTwo() {
    let number = 2;
    while(number <= 100){
        console.log(number);
        // number langsung ditambah 2
        // otomatis angka berikutnya adalah genap.
        number += 2;
    }
}
printNumberVersionTwo();