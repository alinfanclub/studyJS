function findNums(a,b,c) {
    let myArray = [a, b, c];
    let m = Math.min(...myArray);

    console.log(m);
}

findNums(99, 33, 39);

function solution(a, b, c){
    let answer;
    if (a < b) {
        answer = a;
    }  else answer = b
    if (c < answer) {
        answer = c;
    }

    return answer;
}
console.log(solution(22, 4, 300));