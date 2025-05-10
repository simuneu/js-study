const arr = [];
for(let i = 1; i <=100; i++){
    arr.push(i)
}

// let result;
let sum=0;

for(let i = 0; i <=arr.length; i++){
    sum+=i
}
console.log(sum)

arr.forEach((el)=>{
    sum+=el
})
console.log(sum)

for (let el of arr) {
    sum += el;
}
console.log(sum);

let fruits1 = ['사과', '수박', '딸기', '파인애플','참외', '오렌지', '자두', '망고'];
let fruits2 = ['사과', '수박', '참외', '파인애플','오렌지', '망고'];

let same = [];
let diff=[];
for(let i = 0; i< fruits1.length ; i++){
    if(fruits2.includes(fruits1[i])){
        same.push(fruits1[i]);
    } else{
        diff.push(fruits1[i]);
    }
}
console.log(same)
console.log(diff)


const now =new Date();
const result = now.getDay();
console.log(result)
if(result ===0|| result ===6){
    console.log('주말')
}else{
    console.log('평일')
}

console.log(Math.floor(Math.random()*11))
