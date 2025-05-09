let person ={
  name:'hong',
  age:24, 
  isStudent:true,
};

let cat={
  brand:'hd',
  model:'sonata',
  year:2022
}

// let user= new Object();
// user.name='alice';
// user.age=30;

let book = {
  title:'javascript',
  price:15000
}
console.log(book.title)
console.log(book["price"])
console.log(book.price)


// let user={};
// user.name="sean";
// user['age']=20;
// user.age=35; //수정
// delete user.name; //삭제
// console.log(user);
// console.log("------------------------");

const user1={name:'alice', age:30}
console.log(Object.keys(user1)); //객체의 key를 배열로 반환
console.log("------------------------");


console.log(Object.values(user1))//객체의 값을 배열로 반환
console.log("------------------------");


console.log(Object.entries(user1)); //키와 값을 쌍으로 배열 반환
console.log("------------------------");


const user = { name: "Alice" }; 
console.log(user.hasOwnProperty("name"));  // true hasOwnProperty는 키가 존재하는지 여부를 반환
console.log(user.hasOwnProperty("age"));  //false
console.log("------------------------");
console.log("------------------------");


const personA = {
  name: "Lee",
  age: 25,
  city: "Seoul"
};
const personB = {
  name: "Lee",
  age: 25,
  city: "Seoul"
};
console.log(personA === personB); //값은 모두 같지만 다른 메모리 주소에 저장된 다른 존재
console.log("------------------------");

const personC = personA;
console.log(personA === personC); //true 객체C는 객체A의 메모리 주소 자체를 참조해서 복사했기 때문에 같은 객체로 봄
console.log("------------------------");
//그럼 값만 비교하기 위해서는?
console.log(JSON.stringify(personA) === JSON.stringify(personB));//true

console.log("------------------------");
//스프레드 연산자 ... 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged);
