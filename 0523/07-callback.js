function greet(name){
  console.log(`hello ${name}`)
}

function processUserInput(callback){
  const name ='lee'
  callback(name)
}

processUserInput(greet)

//---------------------------------
function calculate(a,b,operation){
  return operation(a,b)
}

function add (x,y){
  return x+y
}

function subtract(x,y){
  return x-y
}

console.log(calculate(5,3,add))
console.log(calculate(5,3,subtract))

//---------------------------------
var newArr=[10,20,30].map(function(currentValue, index){
  console.log(currentValue, index)
  return currentValue+5 //element를 리턴
})
console.log(newArr)

var wrongArr =[10,20,30].map(function(index, currentValue){
  console.log(index, currentValue)
  return currentValue+5 //인덱스를 리턴
})
console.log(wrongArr)