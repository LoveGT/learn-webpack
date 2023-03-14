const message = " hello world";

console.log(message);

function foo() {
  console.log('foo function exec~');
}

foo() 

const obj = {
  name: 'gaotao', 
  age: 18,
  bar() {
    return 'bar'
  }
}
if(false) {
  console.log('hhhh');
}
const { name, age } = obj