//common.js模块化规范
const {add,mul} = require("./js/mathUtils")

console.log(add(20, 30));
console.log(mul(20, 30));

//ES6模块化规范
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//依赖css文件
require('./css/normal.css');

//依赖less文件
require('./css/special.less');