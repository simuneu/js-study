const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(1, 'numberKey');
myMap.set(true, 'boolKey');

console.log(myMap.get('name'))
console.log(myMap.get(1))
console.log(myMap.get(true))
console.log(myMap.size)
console.log("=======================")

for (const key of myMap.keys()){
  console.log(key)
}
for (const value of myMap.values()){
  console.log(value)
}
for (const [key, value] of myMap.entries()){
  console.log(`${key}:${value}`)
}