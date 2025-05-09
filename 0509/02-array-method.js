let fruits =['apple', 'banana'];
fruits.push("orange");
console.log(fruits)
console.log("------------------------");

fruits.pop(); //맨 끝 요소 제거
console.log(fruits);
console.log("------------------------");

fruits.unshift('kiwi');//배열 앞에 새 요소 추가
console.log(fruits);
console.log("------------------------");

fruits.splice(2,1,'grape'); //원하는 위치에 요소를 추가, 삭제
//인덱스 2에서 1개 삭제하고  grape추가
console.log(fruits);
console.log("------------------------");

let fruits2 = fruits.slice(1,3) //배열의 일부분을 잘라서 새 배열로 반환
console.log(fruits2); //인덱스1~3까지(2까지)
console.log("------------------------");

console.log(fruits.indexOf('grape')); //몇 번째 인덱스에 있는지 찾기
console.log("------------------------");

 
