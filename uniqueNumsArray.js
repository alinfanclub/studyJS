const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);


// fillter 사용해서 중복제거
// console.log(nums.indexOf(6));
// const uniqueNums = nums.filter((item, position) => {
//     return nums.indexOf(item) === position;
// })

// console.log(uniqueNums);


// loop 사용해서 중복제거
// function uniqueNums(arr) {
//     const uniqueElements = {};
//     const result = [];
//     for (let element of arr) {
//         if(!uniqueElements[element]) {
//             result.push(element)
//         }
//         uniqueElements[element] = element
//     }
//     return result
    
// }
// console.log(uniqueNums(nums));