for(let i =1; i <=1000 ; i++) {
    if(i%13===0 && i%2===1){
        console.log(i)
    }
}
console.log(i)

let num = Number(prompt())
if(num <=1000){
    for(let i =1; i <=num ; i++) {
        if(i%13===0 && i%2===1){
            console.log(i)
        }
    }
}

for(let i = 2; i<10; i++) {
    for(let j =1; j<=9; j++) {
        console.log(i+'X'+j+'='+i*j)
    }
}

for(let i =1; i<=100; i++){
    if(i%2===0||i%5===0){
        console.log(i)
    }
}