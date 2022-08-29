function solution(a, b, c){
    let answer="YES", max;
    let total = a + b + c;
    let long;
     if (a > b) {
        long = a;
     } else {long = b};
     if (c > long) {
        long = c;
     }
      console.log(long);
     if (total - long < long) {
        return false
     } else {
        return answer;
     }
}

console.log(solution(13, 33, 17));