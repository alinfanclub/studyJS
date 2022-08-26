//! #1. 추가 문자열 사용
//! #2 투포인터 활용

// function checkP(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i>= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed === str
// }

// console.log(checkP("eye"));
// console.log(checkP("abbb"));
// console.log(checkP("우영우"));


function checkP(str) {
    const len = str.length;
    const middle = Math.floor(len/2);

    for(let i = 0; i < middle; i++) {
        if(str.charAt(i) !== str.charAt(len -1 -i)) {
            return false;
        }
    }
    return true;
}

console.log(checkP("eye"));
console.log(checkP("abbbba"));
console.log(checkP("우영우"));
console.log(checkP("인도인"));