for(let a = 1; a<=3; a++){
  console.log(`a=${a}`)
}
for(let a = 1; a<=10; a+=2){
  console.log(`a=${a}`)
}
for(let a = 1; a<=100; a++){
  if(a%2===0){
    console.log(`a=${a}`)
  }
}//짝수만 나오겠지..

let numbers=[1,2,3,4,5];
for(let i = 0 ; i<numbers.length; i++){ //i<5
  console.log(numbers[i])
}


const fruits = ['apple', 'banana', 'kiwi'];
fruits.forEach((el, i)=>{
  console.log(`${i} : ${el}`)
})
console.log(`--------------------------`) 

for(let i=1; i<=2; i++){
  for(let j=1; j<=3; j++){
  console.log(`i= ${i}, j= ${j}`)
  }
}