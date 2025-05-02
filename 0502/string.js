let greeting ='Hello';
let name= 'alice';
let sentence=`my name is ${name}, ${greeting}`
console.log(sentence)

console.log('hello'.slice(1,4))

let str = "Hello, world!";
console.log(str.substr(7, 5));  //7번째에서부터 5글자 출력
console.log(str.slice(7, 12)); //7에서 12번째 글자 출력

let str2 = "Hello, world!";
let result2 = str.replace("world", "javascript")
console.log(result2);

let str3 = "apple, banana, kiwi";
let result3 = str3.split(",");
console.log(result3)