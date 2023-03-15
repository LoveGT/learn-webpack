import { sum } from './utils/math';
const message = 'hello tree shaking'

const obj = {
  name:'why',
  bar() {
    return 'bar'
  }
}

if(false) {
  console.log('哈哈哈');
}

sum(20 + 30)