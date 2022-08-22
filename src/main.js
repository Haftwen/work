import demo1 from "./demo1";

import {
    demo2
} from "./demo2";


demo1()
demo2()

// ==重点: 所有要被打包的资源都要跟入口产生直接/间接的引用关系==
import './style/index.css'
import './style/index.less'
// 引入图片引入的是src属性 引入了两张图
import pngSrc from '../src/img/1.png'
// 通过原生方法 将img标签放进去
const img = document.createElement('img')
img.src = pngSrc
document.body.appendChild(img)

import jpgSrc from '../src/img/2.jpg'
const img2 = document.createElement('img')
img2.src = jpgSrc
document.body.appendChild(img2)

import spngSrc from '../src/img/logo_small.png'
const img3 = document.createElement('img')
img3.src = spngSrc
document.body.appendChild(img3)

import './APP.vue'

import './assets/fonts/iconfont.css'


// 高版本 箭头函数
// 示: 高版本的js代码(箭头函数、类), 打包后, 直接原封不动打入了js文件中, 遇到一些低版本的浏览器就会报错
class App {
    name = '张三'
    age = 18
}

console.log(App)
console.log('123');