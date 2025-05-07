//1.if문을 이용해 사용자가 입력한 수가 짝수인지 아닌지 판단하는 예제

let num=10;
if(num%2===0){
  console.log('짝수입니다.')
}
console.log('--------------------')

//2.1~100까지의 합 구하기
let sum=0;
for(let i=1; i<=100; i++){
  sum+=i;
}
console.log(sum)
console.log('--------------------')

//3. 반복문을 이용한 구구단 출력
// 1 2 3
// 4 5 6 
// 7 8 9

for(let i=1; i<=9; i+=3){
  for(let j = 1; j<=9; j++){
    console.log(`${i}X${j}=${i*j} ${i+1}X${j}=${i+1*j} ${i+2}X${j}=${i+2*j}`)
  }
}
console.log('--------------------')

// 4. 10개의 점수를 랜덤으로 생성하여 점수의 평균과 최대값 그리고 최소값을 구하는 예 제.
//  단, 이때 점수는 0 ~ 100점 사이에 있다고 가정한다(랜덤 함수 사용법 검색!!)
let scoreArr = [];
for(let i=0; i<10; i++) {
  let score = (Math.floor(Math.random()*101))
  scoreArr.push(score);
}
// let sum2 = scoreArr.map((el)=>sum+=el)
// let avg = sum2/10

let min= Math.min(...scoreArr)
let max= Math.max(...scoreArr)
console.log(min, max)
console.log('--------------------')

Math.floor(Math.random()*100) //1~100

// 5. 일차방정식의 풀이에 대한 예제. 남편과 아내의 나이의 합은 75살이고 나이의 곱은 1400이다. 
// 아내보다 남편의 나이가 더 많다고 할 때 남편과 아내의 나이는 각 몇 살인지 찾아내는 프로그램을 작성해라. 
// 단, 남편과 아내의 나이는 100살을 넘지 않는다.
let wife_age
let hus_age
for(let i =1; i<=75; i++){
  let j= 75-i
  if(i*j===1400){
    hus_age=i;
    wife_age=j;
  }
}
console.log(wife_age, hus_age)
console.log('--------------------')

//6. 여자의 자동차는 시속 120Km으로 달리고 있고 남자의 자동차는 시속 180Km로 달리고 있다. 
// 여자의 자동차는 현재 출발지점에서 24Km를 진행한 상태이고 남자는 출발지점에서 6Km를 진행한 상태이다. 
// 남자는몇 분 뒤에 여자의 자동차를 추월하게 되는지를 알아내는 프로그램을 작성하여라.
//1분에 여자는 2, 남자는 3
let man=6;
let woman=24;
for(let a = 0; a<100; a++){
  if(woman+(a*2) < man+(a*3)){
    console.log(a)
    break;
  }
}





