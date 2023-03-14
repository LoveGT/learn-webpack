// index作为入口
import axios from 'axios';
const msg = 'helloWorld'
console.log(msg);

function foo() {
  console.log('foo function exec~');
}
foo()
axios.get('').then(res => {console.log(res);})