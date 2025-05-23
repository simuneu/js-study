//동기
console.log('동기')
console.log('1')
console.log('2')
console.log('3')

//비동기
console.log('비동기')
console.log('1')
setTimeout(()=>{
  console.log('2')
}, 1000)
console.log('3')

//fetch
console.log('fetch')
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response=>response.json())
  .then(data=>console.log(data))
  .catch(error=>console.error('에러발생',error))