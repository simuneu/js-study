//1
function delay() {
  return new Promise(resolve=>setTimeout(()=>resolve('완료'), 1000))
}

async function start(){ //async로 비동기 처리를 할 거라고 알려주는 것 
  const result = await delay();
  console.log('1번 예제')
  console.log(result)
}

start()

//2
function fail(){
  return new Promise((_,reject)=> setTimeout(()=> reject('에러'), 1000))
}
async function execute(){
  try{
    await fail();
  }catch (err){
    console.log('2번 예제')
    console.log(err)
  }
}
execute();

//3
function fetchUser(){
  return new Promise(resolve=>setTimeout(()=>resolve('user'), 1000))
}
function fetchPosts(){
  return new Promise(resolve=>setTimeout(()=>resolve('post'), 1000))
}

async function loadPage(){
  const user = await fetchUser();
  const posts = await fetchPosts();
  console.log('3번 예제')
  console.log(user, posts)
}
loadPage();
