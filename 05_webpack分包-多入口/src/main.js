// main作为入口
import axios from 'axios';
const msg = 'hello main'
console.log(msg);

function bar() {
  console.log('bar function exec~');
}
bar()
axios.get('').then(res => {console.log(res);})