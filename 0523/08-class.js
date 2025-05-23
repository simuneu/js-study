class person{
  constructor(name, age){
    this.name=name;
    this.age=age;
  }
  sayHello(){
    console.log(`hi my name is ${this.name}, ${this.age}years old`)
  }
}

const p1= new person('lee', 30)
const p2= new person('park', 20)

p1.sayHello();
p2.sayHello();

//-----------------------------------
class Animal{
  constructor(name){
    this.name=name
  }
  speak(){
    console.log(`${this.name} makes a noise`)
  }
}
const dog = new Animal('coco');
dog.speak();

//-----------------------------------
class Rectangle {
  constructor(width, height){
    this._width= undefined;
    this._height= undefined;
  }
  get width(){
    return this._width
  }
  set width(value){
    if(typeof value !== 'number' ||value<=0){
      console.log("width는 양수여야 합니다.")
      return
    }
    this._width=value;
  }
}
const rect = new Rectangle(10, 5)
rect.width=-2
console.log(rect.width)