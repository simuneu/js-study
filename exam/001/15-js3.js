let age = Number(prompt())
if(age >=20){
    console.log('성인');
}else if(age>=17){
    console.log('고등학생');
}else if(age>=14){
    console.log('중학생');
}else if(age>=8){
    console.log('초등학생');
}else if(age>=0){
    console.log('유아');
}

let now = new Date().getHours();
let result = (now >= 0 && now <=12) ? '오전': '오후'
console.log(result)