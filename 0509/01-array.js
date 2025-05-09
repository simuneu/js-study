let arr1=[10,20,30];
console.log(arr1);
console.log(arr1.length);
console.log("------------------------");

let arr=new Array(3);
console.log(arr);
console.log(arr.length);
console.log("------------------------");


let arr3 = new Array(3).fill(0)
console.log(arr3);
console.log("------------------------");

let fruits =['apple', 'banana', 'kiwi'];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
fruits[1]='orange';
console.log(fruits[1])
console.log("------------------------");

let score =[85,92,78];
for(let i=0; i<score.length; i++){
  console.log(`${i+1}번째 점수 : ${score[i]}`);
}