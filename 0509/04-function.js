function add(x, y) { //매개변수, 파라미터
  return x + y;
}

let a = 5; //인자, 인수, argument
let b = 8;

add(a,b);
console.log("------------------------");





function func2() {
  console.log("func2 실행");
}
function func1() {
  console.log("func1 시작");
  func2();
  console.log("func1 종료");
}
function main() {
  console.log("main 시작"); //p
  func1();
  console.log("main 종료");
}
main();
// console.log("main 시작");
// console.log("func1 시작");
// console.log("func2 실행");
// console.log("func1 종료");
// console.log("main 종료");
console.log("------------------------");


const greet = function(){
  console.log('hello');
}
greet();
console.log("------------------------");



function execute(fn) {
  fn();
}
execute(function(){
  console.log('실행 가능')
})
console.log("------------------------"); //콜백함수setTimeout같은거..


function multiplier(factor){
  return function(x){
    return x *factor
  }
}
const double = multiplier(2);
console.log(double(5));
console.log("------------------------");

//배열이나 객체에 함수를 저장할 수 있음
const action =[
  function(){console.log('run');},
  function(){console.log('jump');}
]
action[0]();

const obj = {
  speak: function () {
    console.log('Say something');
  }
};
obj.speak();
console.log("------------------------");

const myArr = [
  function(a,b){
    return a+b;
  },
  function(a,b){
    return a-b;
  }
]
console.log(myArr[0](5,10)) //15
console.log(myArr[1](10,5)) //5
console.log("------------------------");