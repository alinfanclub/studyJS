// // for
// for (let i = 0; i < 10; i++) {
//     console.log(i);  
// }

// ----------------
// //whiile
// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }
// ----------------

//do..while
// while 
// let i = 0 
// do {
//     i++;
// } while(i < 10)

// console.log(i);
// ----------------

// //break continue

// while(true) {
//     let answer = confirm('really?');
//     if(!answer) {
//         break;
//     }
// }
// ----------------


for(let i = 0; i < 10; i++) {
    if(i%2) {
        continue
    }
    console.log(i);
}
