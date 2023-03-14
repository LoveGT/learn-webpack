// index作为入口
import axios from "axios";
// import './router/about';
// import './router/category';

import { baz, bax } from "./utils";
const msg = "helloWorld";
console.log(msg);

function foo() {
  console.log("foo function exec~");
}
foo();

// 使用axios
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res);
});

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
btn1.textContent = "关于";
btn2.textContent = "分类";
document.body.append(btn1);
document.body.append(btn2);

btn1.onclick = () => {
  import(
    /*webpackChunkName: 'about' */ /* webpackPrefetch: true */ "./router/about"
  );
};
btn2.onclick = () => {
  import(
    /*webpackChunkName: 'category' */ /* webpackPrefetch: true */ "./router/category"
  );
};

baz();
bax();
