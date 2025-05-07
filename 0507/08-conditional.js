for(let i=1; i<=10; i++){
  if(i===4){
    break;
  }
  console.log(`i=${i}`)
}
console.log('----------------')

for(let a=1; a<=5; a++){
  for(let b = 1; b<=3; b++){
    if(a%2!==0){
      break;
    }
    console.log(`a=${a},b=${b}`)
  }
}
console.log('----------------')

for(let a=1; a<=5; a++){
  for(let b = 1; b<=3; b++){
    if(a%2!==0){
      continue;
    }
    console.log(`a=${a},b=${b}`)
  }
}
console.log('----------------')

let a= 1;
while(a++ <=30){
  if(a%2===0||a%3===0||a%5===0){
    continue;
  }
  console.log(`a=${a}`)
}
