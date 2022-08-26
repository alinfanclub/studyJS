// 최대 수익 계산하기
// n 기간 동안의 주식가격 변화를 기준으로 낼수있는 가장 큰 수익 계산하기

//! 문제설명
// 주어진 기간동안 주식 매매를 하여 얻는 이익을 계산
// 예) 기간중 가장 저렴할때 주식을 구입, 가장 비쌀때 주식을 판매
// 예) 3일 동안의 주식가격이 [100, 50, 250] 이라면, 최대 이익은 200
// 예) 3일 동안의 주식가격이 [100, 50, 20] 이라면, 최대 이익은 0

// ! 문재 풀이 접근 방법
// input = [100, 200, 50, 30, 150, 250]
// 두자기 변수 초기화
// a. maxProfit = 0
// b. minBuyPrice = input[0]

// input 배열에 반복문 실행 
// a. 매회의 반복마다 조건문 걸기 (현재까지 가장저렴한 구입가격과 현재의 가격을 비교)
// b. 두가지 결정
//     1. 현재의 가격이 minBuyPrice 보다 클때
//     -> 수익 발생, maxProfit 변수값 업데이트
//     2. 현재의 가격이 minBuyPrice 보다 작을때
//     -> 수익 발생(x) minBuyPrice 변수값 업데이트
// - 반복문 종료후, maxProfit 값 리턴

const input = [100, 30, 50, 200];
const input2 = [100, 50, 20, 10];

function maximumProfit(prices) {
    let maxProfit = 0;
    let minBuyPrice = input[0];
    for (let price of prices){
        if(minBuyPrice < price) {
            maxProfit = Math.max(maxProfit, price-minBuyPrice);
        } else {
            minBuyPrice = price
        }
        // console.log(price);
    }
    return maxProfit;
}
console.log(maximumProfit(input));
console.log(maximumProfit(input2));