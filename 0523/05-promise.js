const promise = new Promise((resolve, reject)=>{ //성공했을 때의 매개변수, 실패했을 때의 매개변수
  setTimeout(()=>{
    resolve('성공');
  },1000)
})
promise.then(result=>console.log(result));

//--------------------------------------
const promise2= new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('에러');
  },1000)
})
promise.catch(error=>console.log(error));

//--------------------------------------
function fetchData(){
  return new Promise(resolve=>{
    setTimeout(()=>resolve(10), 1000)
  })
}
fetchData()
.then(data=>data+5)
.then(result=>console.log(result))

//--------------------------------------
  const p1 = new Promise(resolve=> setTimeout(()=>resolve('1번 완료'),1000))
  const p2 = new Promise(resolve=> setTimeout(()=>resolve('2번 완료'),1500) )
  const p3 = new Promise(resolve=> setTimeout(()=>resolve('3번 완료'),500) )
Promise.all([p1,p2,p3])
  .then(results=>{
    console.log(results)
  })
  .catch(err=>console.log('에러', err))