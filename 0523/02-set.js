const mySet = new Set();
mySet.add('apple')
mySet.add('banana')
mySet.add('apple') //중복은 무시

console.log(mySet.has('apple')); //true
console.log(mySet.size) //2

const fruits = new Set(['apple', 'banana','kiwi']);
for(const fruit of fruits){
  console.log(fruit) //apple, banana,kiwi
}