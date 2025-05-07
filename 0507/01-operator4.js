//시프트 
console.log(5<<1);
console.log(3<<2);
console.log("");

console.log(8>>1);
console.log(5>>1);
console.log(-8>>1);
console.log("");

console.log(8>>>1);
console.log(-8>>>1);
console.log("");

//비교
console.log(5<10);
console.log(5>=5);
console.log("a"<"b");
console.log("apple">"banana");
console.log("");

//논리
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false || true);  // true
console.log(false || false); // false

//Nullish (??)
let name;
console.log(name ?? "이름 없음") //좌변에 값이 없으면 우변을 반환
name="lee";
console.log(name ?? "이름 없음") //좌변에 값이 있으면 좌변 출력
console.log("");

//삼항
let age=20;
let result = age>=18?"성인":"미성년자"
console.log(result);
console.log("");

let score = 85;
let grade= (score>=90?"A":(score >=80?"B":(score >=70?"C":"F")))
console.log(grade);
