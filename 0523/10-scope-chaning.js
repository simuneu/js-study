const x =1;
function outer(){
  const y =2;
  function inner(){
    const z =3;
    console.log(x,y,z)
  }
  inner()
}
outer()
console.log(a)