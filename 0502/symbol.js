const id1 = Symbol("userId")
const id2 = Symbol("userId")


console.log(id1 ===id2) //심볼은 고유한 값
console.log( typeof id1) //데이터 타입이  symbol이 됨

const user = {
  name:'kim',
  [id1] : 1234
}
console.log(user[id1]) //