// function solution(n){
//     let answer=0;
//     for (let i = 1; i <= n; i++) {
//        answer = answer + i
//     }
//     return answer;
// }

const e = require("cors");

// console.log(solution(10));

// !----------------------------

// function solution(arr){         
//     let answer;
//     answer = Math.min(...arr);
//     // answer = Math.min.apply(null, arr);
//     return answer;

// }

// let arr=[1, 0, 2];
// console.log(solution(arr));

// !----------------------------

// function solution(arr){
//     let answer=[];
//     let sum=0, min=Number.MAX_SAFE_INTEGER;
//     for(let a of arr) {
//         if(a%2 === 1) {
//             sum+=a
//             if(a<min) {
//                 min=a;
//             }
//         } 
        
//     }
//     answer.push(sum)
//     answer.push(min)


//     return answer;

// }

// arr=[12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));

// !----------------------------

function solution(day, arr){
    let answer=0;
    for(let a of arr) {
        if(a%10===day) {
            answer++
        }
    }
    
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr))