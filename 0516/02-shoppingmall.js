const collectionList = document.getElementById('collectionList');
const totalPrice = document.getElementById('totalPrice');
const ids = ['apple', 'dragon', 'grape', 'kiwi', 'peach', 'mango'];
const fruits = {};
let sumPrice=0;

ids.forEach(id => {
  fruits[id] = document.getElementById(id);
});

buy=(id)=>{
  const fruit = fruits[id];
  const name = fruit.querySelector('.card-title').textContent;
  const price = fruit.querySelector('.card-text').textContent;
  const numPrice = Number(price.replace(/[,원\s]/g, ''));

  const li = document.createElement('li');
  
  li.innerHTML=`${name} : ${price}<br>`
  collectionList.appendChild(li)
  sumPrice+= numPrice

  totalPrice.innerText=`총 금액 ${sumPrice}원`
}