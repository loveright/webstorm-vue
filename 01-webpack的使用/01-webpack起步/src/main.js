//common.js模块化规范
const {add,mul} = require("./mathUtils")

console.log(add(20, 30));
console.log(mul(20, 30));

//ES6模块化规范
import {name,age,height} from "./info";

console.log(name);
console.log(age);
console.log(height);

//依赖css模块
require('./css/normal.css');