function ex(x){
  console.log(x)
  var x;
  console.log(x)
  var x=2;
  console.log(x)
}
ex(1)
//--------------
function test(){
  console.log(b);
  var b='bbb';
  console.log(b);
  function b(){

  }
  console.log(b)
}
test()
//----------------

function sum(a,b){
  return a+b
}
var multiply = function(a,b){
  return a+b;
}
console.log(sum(1,2))
console.log(multiply(3,4))